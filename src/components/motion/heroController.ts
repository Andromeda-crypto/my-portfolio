type HeroControllerOptions = {
    initialAngle?: number;
    maximumAngle?: number;
    stiffness?: number;
    damping?: number;
    pointerStrength?: number;
};

type HeroControllerCleanup = () => void;

const clamp = (value: number, minimum: number, maximum: number) =>
    Math.min(Math.max(value, minimum), maximum);

const prefersReducedMotion = () =>
    window.matchMedia("(prefers-reduced-motion: reduce)").matches;

export const initializeHeroController = (
    options: HeroControllerOptions = {}
): HeroControllerCleanup => {
    const hero = document.querySelector<HTMLElement>(
        "[data-kinetic-hero]"
    );

    const heroName = hero?.querySelector<HTMLElement>(
        "[data-hero-name]"
    );

    if (!hero || !heroName) {
        return () => { };
    }

    const {
        initialAngle = 0.72,
        maximumAngle = 0.95,
        stiffness = 42,
        damping = 11.5,
        pointerStrength = 0.012
    } = options;

    if (prefersReducedMotion()) {
        heroName.style.setProperty("--hero-angle", "0deg");

        return () => { };
    }

    let angle = initialAngle;
    let angularVelocity = 0;
    let disturbance = 0;

    let previousPointerX: number | null = null;
    let previousPointerTime: number | null = null;

    let previousFrameTime = performance.now();
    let animationFrameId = 0;

    let isVisible = true;
    let isPointerInside = false;

    const updateHeroTransform = () => {
        const safeAngle = clamp(
            angle,
            -maximumAngle,
            maximumAngle
        );

        heroName.style.setProperty(
            "--hero-angle",
            `${safeAngle.toFixed(4)}deg`
        );
    };

    const resetPointerHistory = () => {
        previousPointerX = null;
        previousPointerTime = null;
        isPointerInside = false;
    };

    const handlePointerEnter = () => {
        isPointerInside = true;
        previousPointerX = null;
        previousPointerTime = null;
    };

    const handlePointerMove = (event: PointerEvent) => {
        if (event.pointerType === "touch") {
            return;
        }

        const currentTime = performance.now();

        if (
            previousPointerX === null ||
            previousPointerTime === null
        ) {
            previousPointerX = event.clientX;
            previousPointerTime = currentTime;
            return;
        }

        const elapsedMilliseconds =
            currentTime - previousPointerTime;

        if (elapsedMilliseconds <= 0) {
            return;
        }

        const horizontalDistance =
            event.clientX - previousPointerX;

        const pointerVelocity =
            horizontalDistance / elapsedMilliseconds;

        disturbance += clamp(
            pointerVelocity * pointerStrength,
            -0.3,
            0.3
        );

        disturbance = clamp(
            disturbance,
            -maximumAngle,
            maximumAngle
        );

        previousPointerX = event.clientX;
        previousPointerTime = currentTime;
    };

    const handlePointerLeave = () => {
        resetPointerHistory();
    };

    const handleVisibilityChange = () => {
        isVisible = !document.hidden;

        if (isVisible) {
            previousFrameTime = performance.now();
        }
    };

    const animate = (currentTime: number) => {
        animationFrameId = window.requestAnimationFrame(animate);

        if (!isVisible) {
            return;
        }

        const elapsedSeconds = clamp(
            (currentTime - previousFrameTime) / 1000,
            0,
            0.034
        );

        previousFrameTime = currentTime;

        disturbance *= Math.pow(
            isPointerInside ? 0.78 : 0.64,
            elapsedSeconds * 60
        );

        const targetAngle = disturbance;

        const restoringForce =
            stiffness * (targetAngle - angle);

        const dampingForce =
            damping * angularVelocity;

        const angularAcceleration =
            restoringForce - dampingForce;

        angularVelocity +=
            angularAcceleration * elapsedSeconds;

        angle += angularVelocity * elapsedSeconds;

        if (
            Math.abs(angle) < 0.0005 &&
            Math.abs(angularVelocity) < 0.0005 &&
            Math.abs(disturbance) < 0.0005
        ) {
            angle = 0;
            angularVelocity = 0;
            disturbance = 0;
        }

        updateHeroTransform();
    };

    hero.addEventListener(
        "pointerenter",
        handlePointerEnter
    );

    hero.addEventListener(
        "pointermove",
        handlePointerMove,
        {
            passive: true
        }
    );

    hero.addEventListener(
        "pointerleave",
        handlePointerLeave
    );

    document.addEventListener(
        "visibilitychange",
        handleVisibilityChange
    );

    updateHeroTransform();

    animationFrameId =
        window.requestAnimationFrame(animate);

    return () => {
        window.cancelAnimationFrame(animationFrameId);

        hero.removeEventListener(
            "pointerenter",
            handlePointerEnter
        );

        hero.removeEventListener(
            "pointermove",
            handlePointerMove
        );

        hero.removeEventListener(
            "pointerleave",
            handlePointerLeave
        );

        document.removeEventListener(
            "visibilitychange",
            handleVisibilityChange
        );

        heroName.style.setProperty(
            "--hero-angle",
            "0deg"
        );
    };
};
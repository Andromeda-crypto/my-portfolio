const reducedMotionQuery = window.matchMedia(
    "(prefers-reduced-motion: reduce)"
);

const revealImmediately = (element: Element) => {
    element.classList.add("is-visible");
};

const createRevealObserver = () => {
    const revealElements = document.querySelectorAll<HTMLElement>(
        "[data-reveal], [data-stagger], .motion-line, .media-reveal"
    );

    if (reducedMotionQuery.matches || !("IntersectionObserver" in window)) {
        revealElements.forEach(revealImmediately);
        return null;
    }

    const observer = new IntersectionObserver(
        (entries, activeObserver) => {
            entries.forEach((entry) => {
                if (!entry.isIntersecting) return;

                entry.target.classList.add("is-visible");
                activeObserver.unobserve(entry.target);
            });
        },
        {
            threshold: 0.16,
            rootMargin: "0px 0px -8% 0px"
        }
    );

    revealElements.forEach((element) => {
        observer.observe(element);
    });

    return observer;
};

const initializeInternalPageTransitions = () => {
    const internalLinks = document.querySelectorAll<HTMLAnchorElement>(
        'a[href^="/"]:not([target="_blank"]):not([href^="/#"])'
    );

    internalLinks.forEach((link) => {
        link.addEventListener("click", (event) => {
            if (
                event.metaKey ||
                event.ctrlKey ||
                event.shiftKey ||
                event.altKey ||
                reducedMotionQuery.matches
            ) {
                return;
            }

            const destination = new URL(link.href, window.location.origin);

            if (
                destination.origin !== window.location.origin ||
                destination.pathname === window.location.pathname
            ) {
                return;
            }

            event.preventDefault();
            document.body.classList.add("is-transitioning");

            window.setTimeout(() => {
                window.location.href = destination.href;
            }, 520);
        });
    });
};

const initializeMediaParallax = () => {
    if (reducedMotionQuery.matches) return;

    const mediaElements =
        document.querySelectorAll<HTMLElement>("[data-parallax-media]");

    mediaElements.forEach((element) => {
        const handlePointerMove = (event: PointerEvent) => {
            const bounds = element.getBoundingClientRect();

            const normalizedX =
                (event.clientX - bounds.left) / bounds.width - 0.5;

            const normalizedY =
                (event.clientY - bounds.top) / bounds.height - 0.5;

            element.style.setProperty(
                "--parallax-x",
                `${normalizedX * 8}px`
            );

            element.style.setProperty(
                "--parallax-y",
                `${normalizedY * 8}px`
            );
        };

        const resetPosition = () => {
            element.style.setProperty("--parallax-x", "0px");
            element.style.setProperty("--parallax-y", "0px");
        };

        element.addEventListener("pointermove", handlePointerMove);
        element.addEventListener("pointerleave", resetPosition);
    });
};

export const initializeScrollAnimations = () => {
    createRevealObserver();
    initializeInternalPageTransitions();
    initializeMediaParallax();
};
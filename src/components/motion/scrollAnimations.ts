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

const formatSectionLabel = (section: HTMLElement) => {
    if (section.hasAttribute("data-kinetic-hero")) {
        return "Intro";
    }

    return (
        section.dataset.scrollLabel ||
        section.id.replace(/-/g, " ") ||
        "Section"
    );
};

const initializeScrollInterface = () => {
    const backdrop =
        document.querySelector<HTMLElement>("[data-scroll-backdrop]");

    const headerProgress =
        document.querySelector<HTMLElement>("[data-header-progress]");

    if (!backdrop || !headerProgress) return;

    const sectionIndex =
        backdrop.querySelector<HTMLElement>("[data-scroll-section-index]");

    const sectionTotal =
        backdrop.querySelector<HTMLElement>("[data-scroll-section-total]");

    const sectionLabel =
        backdrop.querySelector<HTMLElement>("[data-scroll-section-label]");

    const navigationLinks = Array.from(
        document.querySelectorAll<HTMLAnchorElement>("[data-scroll-nav]")
    );

    const sections = Array.from(
        document.querySelectorAll<HTMLElement>(
            ".site-main > [data-kinetic-hero], .site-main > section[id]"
        )
    );

    if (sections.length === 0) return;

    sectionTotal &&
        (sectionTotal.textContent = String(sections.length).padStart(2, "0"));

    let ticking = false;
    let lastScrollY = window.scrollY;
    let smoothedVelocity = 0;
    let activeIndex = -1;

    const updateActiveSection = (viewportAnchor: number) => {
        let nextActiveIndex = 0;

        sections.forEach((section, index) => {
            const bounds = section.getBoundingClientRect();

            if (bounds.top <= viewportAnchor) {
                nextActiveIndex = index;
            }
        });

        const activeSection = sections[nextActiveIndex];
        const bounds = activeSection.getBoundingClientRect();
        const sectionScrollableDistance = Math.max(
            bounds.height - window.innerHeight * 0.35,
            1
        );

        const localProgress = Math.min(
            Math.max((viewportAnchor - bounds.top) / sectionScrollableDistance, 0),
            1
        );

        backdrop.style.setProperty(
            "--section-progress",
            localProgress.toFixed(4)
        );

        if (nextActiveIndex === activeIndex) return;

        activeIndex = nextActiveIndex;

        const label = formatSectionLabel(activeSection);
        const sectionKey = activeSection.hasAttribute("data-kinetic-hero")
            ? "intro"
            : activeSection.id;

        if (sectionIndex) {
            sectionIndex.textContent = String(activeIndex + 1).padStart(2, "0");
        }

        if (sectionLabel) {
            sectionLabel.textContent = label;
        }

        navigationLinks.forEach((link) => {
            link.dataset.active =
                link.dataset.scrollNav === sectionKey ? "true" : "false";
        });
    };

    const updateScrollState = () => {
        const currentScrollY = window.scrollY;
        const scrollableHeight = Math.max(
            document.documentElement.scrollHeight - window.innerHeight,
            1
        );

        const progress = Math.min(
            Math.max(currentScrollY / scrollableHeight, 0),
            1
        );

        const rawVelocity = Math.min(
            Math.max((currentScrollY - lastScrollY) / 48, -1),
            1
        );

        smoothedVelocity += (rawVelocity - smoothedVelocity) * 0.2;
        lastScrollY = currentScrollY;

        backdrop.style.setProperty("--scroll-progress", progress.toFixed(5));
        backdrop.style.setProperty(
            "--scroll-velocity",
            reducedMotionQuery.matches
                ? "0"
                : smoothedVelocity.toFixed(4)
        );

        backdrop.dataset.visible =
            currentScrollY > window.innerHeight * 0.42 ? "true" : "false";

        headerProgress.style.transform = `scaleX(${progress})`;

        updateActiveSection(window.innerHeight * 0.42);

        ticking = false;
    };

    const requestUpdate = () => {
        if (ticking) return;

        ticking = true;
        window.requestAnimationFrame(updateScrollState);
    };

    updateScrollState();

    window.addEventListener("scroll", requestUpdate, {
        passive: true
    });

    window.addEventListener("resize", requestUpdate);
};

export const initializeScrollAnimations = () => {
    createRevealObserver();
    initializeInternalPageTransitions();
    initializeMediaParallax();
    initializeScrollInterface();
};
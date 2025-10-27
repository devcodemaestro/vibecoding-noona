// Modal functionality
export function initModal() {
  const projectCards = document.querySelectorAll(".project-card");
  const modal = document.getElementById("projectModal");
  const closeButton = document.querySelector(".modal-close");
  const modalOverlay = document.querySelector(".modal-overlay");

  // Project data
  const projectData = {
    1: {
      title: "E-Commerce Platform",
      description:
        "완전한 전자상거래 솔루션으로, 쇼핑 카트, 결제, 주문 관리 기능을 포함합니다. React와 Node.js를 사용하여 구축되었습니다.",
      image: "https://images.unsplash.com/photo-1556740758-90de374c12ad?w=800",
      tech: ["React.js", "Python", "PostgreSQL", "Stripe API"],
      link: "https://github.com",
      liveLink: "https://demo.com",
    },
    2: {
      title: "Real-time Chat App",
      description:
        "WebSocket을 활용한 실시간 채팅 애플리케이션입니다. Socket.io를 사용하여 실시간 메시징, 파일 공유, 그룹 채팅 기능을 구현했습니다.",
      image:
        "https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=800",
      tech: ["React", "Next.js", "Socket.io", "MongoDB"],
      link: "https://github.com",
      liveLink: "https://demo.com",
    },
    3: {
      title: "Task Management Tool",
      description:
        "팀 협업을 위한 업무 관리 도구입니다. 드래그 앤 드롭, 댓글, 파일 첨부, 알림 기능이 포함되어 있습니다.",
      image:
        "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=800",
      tech: ["JavaScript", "TypeScript", "Express", "Redis"],
      link: "https://github.com",
      liveLink: "https://demo.com",
    },
    4: {
      title: "Portfolio Website",
      description:
        "개인 포트폴리오 웹사이트입니다. 모던한 디자인과 부드러운 애니메이션을 적용했습니다.",
      image: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=800",
      tech: ["Vue.js", "Nuxt.js", "Tailwind CSS"],
      link: "https://github.com",
      liveLink: "https://demo.com",
    },
    5: {
      title: "Dashboard Analytics",
      description:
        "실시간 데이터 대시보드로, 다양한 차트와 그래프를 통해 데이터를 시각화합니다. Chart.js를 활용했습니다.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800",
      tech: ["Angular", "Node.js", "MongoDB", "Chart.js"],
      link: "https://github.com",
      liveLink: "https://demo.com",
    },
    6: {
      title: "REST API Server",
      description:
        "확장 가능한 REST API 서버입니다. 사용자 인증, 파일 업로드, 데이터 검색 등의 기능을 제공합니다.",
      image:
        "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800",
      tech: ["React", "Ruby on Rails", "AWS S3"],
      link: "https://github.com",
      liveLink: "https://demo.com",
    },
    7: {
      title: "Landing Page",
      description:
        "완전 반응형 랜딩 페이지입니다. SEO 최적화와 빠른 로딩 속도를 중심으로 구현했습니다.",
      image:
        "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=800",
      tech: ["HTML", "CSS", "JavaScript", "GSAP"],
      link: "https://github.com",
      liveLink: "https://demo.com",
    },
    8: {
      title: "Blog Platform",
      description:
        "개인 블로그 플랫폼입니다. Markdown 에디터, 태그 시스템, 댓글 기능을 포함합니다.",
      image:
        "  https://images.unsplash.com/photo-1505330622279-bf7d7fc918f4?w=800",
      tech: ["Tailwind", "Next.js", "MDX"],
      link: "https://github.com",
      liveLink: "https://demo.com",
    },
  };
  // Open modal
  projectCards.forEach((card, index) => {
    card.addEventListener("click", () => {
      const projectId = index + 1;
      openModal(projectId);
    });
  });

  // Close modal
  if (closeButton) {
    closeButton.addEventListener("click", closeModal);
  }

  if (modalOverlay) {
    modalOverlay.addEventListener("click", closeModal);
  }

  // ESC key to close
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && modal) {
      closeModal();
    }
  });

  function openModal(projectId) {
    const project = projectData[projectId];
    if (!project) return;

    // Set modal content
    document.querySelector(".modal-image").src = project.image;
    document.querySelector(".modal-image").alt = project.title;
    document.querySelector(".modal-title").textContent = project.title;
    document.querySelector(".modal-description").textContent =
      project.description;

    // Set tech tags
    const techContainer = document.querySelector(".modal-tech");
    techContainer.innerHTML = "";
    project.tech.forEach((tech) => {
      const tag = document.createElement("span");
      tag.className = "tech-tag";
      tag.textContent = tech;
      techContainer.appendChild(tag);
    });

    // Set links
    const githubLink = document.querySelector(".modal-github-link");
    const liveLink = document.querySelector(".modal-live-link");
    if (githubLink) githubLink.href = project.link;
    if (liveLink) liveLink.href = project.liveLink;

    // Show modal
    modal.classList.add("active");
    document.body.style.overflow = "hidden";
  }

  function closeModal() {
    if (modal) {
      modal.classList.remove("active");
      document.body.style.overflow = "auto";
    }
  }

  // Make closeModal globally available
  window.closeModal = closeModal;
}

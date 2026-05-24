import React, { useMemo, useState } from 'react';
import { FormattedMessage } from 'react-intl';
import projects, { ACCESS_LABELS, PROJECT_FILTERS } from '../../data/projects';
import './Project.css';

const AccessNotice = ({ project }) => {
  if (!project.accessNote) return null;
  return (
    <p className={`project-access project-access--${project.access}`} role="note">
      <i
        className={`fas ${
          project.access === 'live'
            ? 'fa-external-link-alt'
            : project.access === 'mobile'
              ? 'fa-android'
              : project.access === 'internal'
                ? 'fa-lock'
                : 'fa-info-circle'
        }`}
        aria-hidden
      />
      {project.accessNote}
    </p>
  );
};

const Project = () => {
  const [filter, setFilter] = useState('all');
  const [modalProject, setModalProject] = useState(null);

  const filtered = useMemo(() => {
    if (filter === 'all') return projects;
    if (filter === 'featured') return projects.filter((p) => p.featured);
    return projects.filter((p) => p.category === filter);
  }, [filter]);

  const openModal = (e, project) => {
    if (e.target.closest('a')) return;
    setModalProject(project);
  };

  const renderMedia = (project) => {
    if (project.image) {
      return (
        <img
          src={project.image}
          alt={`${project.title} screenshot`}
          style={project.imageFit === 'cover' ? { objectFit: 'cover' } : undefined}
        />
      );
    }
    const ph = project.placeholder;
    return (
      <div
        className="project-card-v2__placeholder"
        style={{ background: ph?.gradient || 'var(--gradient-glow)' }}
        aria-hidden
      >
        {ph?.icon || '⚡'}
      </div>
    );
  };

  const renderActions = (project, stopPropagation = false) => {
    const stop = stopPropagation ? (e) => e.stopPropagation() : undefined;
    const hasLive = Boolean(project.links?.live);
    const hasRepo = Boolean(project.links?.repo);

    return (
      <div className="project-card-v2__actions">
        {hasLive && (
          <a
            href={project.links.live}
            className="custom-btn btn"
            target="_blank"
            rel="noopener noreferrer"
            onClick={stop}
          >
            Live Site
          </a>
        )}
        {hasRepo && (
          <a
            href={project.links.repo}
            className="custom-btn btn-codigo"
            target="_blank"
            rel="noopener noreferrer"
            onClick={stop}
          >
            GitHub
          </a>
        )}
        {!hasLive && !hasRepo && project.access !== 'live' && (
          <span className="project-availability-tag">
            {ACCESS_LABELS[project.access] || 'Details on request'}
          </span>
        )}
      </div>
    );
  };

  return (
    <section className="proyectos mas-proyect" id="proyectos">
      <h2 className="heading">
        <FormattedMessage id="projects" defaultMessage="Projects" />
      </h2>
      <p className="projects-intro section-subtitle">
        <FormattedMessage
          id="projects-intro"
          defaultMessage="Production apps, award-winning AI systems, and institutional platforms. Live links where available; internal and mobile projects include context for recruiters."
        />
      </p>

      <div className="projects-legend" role="list" aria-label="Project availability legend">
        <span className="projects-legend__item" role="listitem">
          <span className="projects-legend__dot projects-legend__dot--live" /> Live demo
        </span>
        <span className="projects-legend__item" role="listitem">
          <span className="projects-legend__dot projects-legend__dot--mobile" /> Android app
        </span>
        <span className="projects-legend__item" role="listitem">
          <span className="projects-legend__dot projects-legend__dot--internal" /> Internal only
        </span>
      </div>

      <div className="projects-filters" role="tablist" aria-label="Filter projects">
        {PROJECT_FILTERS.map((f) => (
          <button
            key={f.id}
            type="button"
            role="tab"
            aria-selected={filter === f.id}
            className={`projects-filter-btn${filter === f.id ? ' active' : ''}`}
            onClick={() => setFilter(f.id)}
          >
            {f.label}
          </button>
        ))}
      </div>

      <div className="projects-grid">
        {filtered.map((project) => (
          <article
            key={project.id}
            className="project-card-v2"
            onClick={(e) => openModal(e, project)}
            onKeyDown={(e) => e.key === 'Enter' && setModalProject(project)}
            tabIndex={0}
            role="button"
            aria-label={`View details for ${project.title}`}
          >
            <div
              className={`project-card-v2__media${
                project.mediaType === 'mobile' ? ' project-card-v2__media--mobile' : ''
              }`}
            >
              {renderMedia(project)}
              <span className={`project-card-v2__badge project-card-v2__badge--${project.badgeType}`}>
                {project.badge}
              </span>
            </div>
            <div className="project-card-v2__body">
              <p className="project-card-v2__period">{project.period}</p>
              <h3 className="project-card-v2__title">{project.title}</h3>
              <p className="project-card-v2__tagline">{project.tagline}</p>
              <p className="project-card-v2__role">{project.role}</p>
              <AccessNotice project={project} />
              <ul className="project-card-v2__highlights">
                {project.highlights.slice(0, 2).map((h, i) => (
                  <li key={i}>{h}</li>
                ))}
              </ul>
              <div className="project-card-v2__stack">
                {project.stack.slice(0, 4).map((tech) => (
                  <span key={tech} className="project-card-v2__chip">
                    {tech}
                  </span>
                ))}
                {project.stack.length > 4 && (
                  <span className="project-card-v2__chip">+{project.stack.length - 4}</span>
                )}
              </div>
              {renderActions(project, true)}
            </div>
          </article>
        ))}
      </div>

      {modalProject && (
        <div
          className="project-modal-overlay"
          role="dialog"
          aria-modal="true"
          aria-labelledby="project-modal-title"
          onClick={() => setModalProject(null)}
        >
          <div className="project-modal" onClick={(e) => e.stopPropagation()}>
            <button
              type="button"
              className="project-modal__close"
              onClick={() => setModalProject(null)}
              aria-label="Close"
            >
              &times;
            </button>
            <div
              className={`project-modal__media${
                modalProject.mediaType === 'mobile' ? ' project-modal__media--mobile' : ''
              }`}
            >
              {modalProject.image ? (
                <img
                  className="project-modal__img"
                  src={modalProject.image}
                  alt={`${modalProject.title} screenshot`}
                />
              ) : (
                <div
                  className="project-modal__placeholder"
                  style={{
                    background: modalProject.placeholder?.gradient || 'var(--gradient-glow)',
                  }}
                >
                  {modalProject.placeholder?.icon || '⚡'}
                </div>
              )}
            </div>
            <h3 id="project-modal-title">{modalProject.title}</h3>
            <p className="project-modal__meta">
              {modalProject.tagline} · {modalProject.period}
            </p>
            <p className="project-card-v2__role">{modalProject.role}</p>
            <AccessNotice project={modalProject} />
            <ul>
              {modalProject.highlights.map((h, i) => (
                <li key={i}>{h}</li>
              ))}
            </ul>
            <div className="project-card-v2__stack">
              {modalProject.stack.map((tech) => (
                <span key={tech} className="project-card-v2__chip">
                  {tech}
                </span>
              ))}
            </div>
            {renderActions(modalProject)}
          </div>
        </div>
      )}
    </section>
  );
};

export default Project;

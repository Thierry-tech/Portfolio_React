import { useState } from "react";
import "./hobbies.css";


const hobbies = [
  {
    id: 1,
    title: "Musique",
    emoji: "🎵",
    color: "#e63946",
    description:
      "Guitariste amateur depuis 2016. La musique est pour moi un espace de créativité libre, loin des écrans.",
    tags: ["Guitare", "Afro", "Rap"],
    videos: [],
    links: [],
  },
  {
    id: 2,
    title: "Voyage",
    emoji: "✈️",
    color: "#457b9d",
    description:
      "Explorer de nouvelles cultures nourrit ma curiosité intellectuelle. Afrique, Europe, Asie du Sud-Est — chaque destination m'apporte une nouvelle perspective.",
    tags: ["Afrique", "Europe", "Photographie"],
    videos: [],
    links: [],
  },
  {
    id: 4,
    title: "Sport",
    emoji: "⚽",
    color: "#e9c46a",
    description:
      "Football et musculation pour décompresser. Le sport m'apprend la discipline et la persévérance sont deux qualités que j'applique aussi dans mon travail.",
    tags: ["Football", "Musculation", "Running"],
    videos: [],
    links: [],
  },
  {
    id: 5,
    title: "Cinéma",
    emoji: "🎬",
    color: "#9b5de5",
    description:
      "Cinéphile passionné, j'analyse les films comme des récits visuels. Science-fiction et drames psychologiques sont mes genres de prédilection.",
    tags: ["Sci-Fi", "Drama", "Analyse"],
    videos: [
      {
        id: "asslHRWJPEA",
        title: "Mon film préféré — Trailer",
        thumb: null,
      },
    ],
    links: [],
  },
  {
    id: 6,
    title: "Lecture",
    emoji: "📖",
    color: "#f4a261",
    description:
      "Entre essais tech, romans africains contemporains et philosophie, la lecture est mon rituel quotidien du matin.",
    tags: ["Tech", "Développement personnel", "Littérature africaine"],
    videos: [],
    links: [],
  },
  {
    id: 7,
    title: "Arts de la scène",
    emoji: "🎭",
    color: "#457b9d",
    description:
      "Le monde artistique a été et demeure un grand axe de prise de parole en publique et de cofiance en soi",
    tags: ["Contes", "Théâtre", "Slam"],
    videos: [],
    links: [],
  },
];

// ─────────────────────────────────────────
// Composant modale vidéo
// ─────────────────────────────────────────
function VideoModal({ video, onClose }) {
  if (!video) return null;
  return (
    <div className="modal-backdrop" onClick={onClose}>
      <div className="modal-box" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close" onClick={onClose} aria-label="Fermer">
          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            width="20"
            height="20"
          >
            <line x1="18" y1="6" x2="6" y2="18" />
            <line x1="6" y1="6" x2="18" y2="18" />
          </svg>
        </button>
        <div className="modal-iframe-wrapper">
          <iframe
            src={`https://www.youtube.com/embed/${video.id}?autoplay=1`}
            title={video.title}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </div>
        <p className="modal-title">{video.title}</p>
      </div>
    </div>
  );
}

// ─────────────────────────────────────────
// Composant miniature vidéo
// ─────────────────────────────────────────
function VideoThumb({ video, color, onPlay }) {
  const thumb =
    video.thumb || `https://img.youtube.com/vi/${video.id}/mqdefault.jpg`;
  return (
    <button
      className="video-thumb"
      onClick={() => onPlay(video)}
      aria-label={`Lire ${video.title}`}
    >
      <img src={thumb} alt={video.title} loading="lazy" />
      <div className="video-play-btn" style={{ "--accent": color }}>
        <svg viewBox="0 0 24 24" fill="currentColor" width="20" height="20">
          <polygon points="5 3 19 12 5 21 5 3" />
        </svg>
      </div>
      <span className="video-label">{video.title}</span>
    </button>
  );
}

// ─────────────────────────────────────────
// Carte loisir
// ─────────────────────────────────────────
function HobbyCard({ hobby, onPlay }) {
  return (
    <div className="hobby-card" style={{ "--accent": hobby.color }}>
      <div className="hobby-card-top">
        <div className="hobby-emoji-wrapper">
          <span className="hobby-emoji">{hobby.emoji}</span>
        </div>
        <div className="hobby-header-text">
          <h3 className="hobby-title">{hobby.title}</h3>
          <div className="hobby-tags">
            {hobby.tags.map((t) => (
              <span key={t} className="hobby-tag">
                {t}
              </span>
            ))}
          </div>
        </div>
      </div>

      <p className="hobby-desc">{hobby.description}</p>

      {/* Vidéos YouTube */}
      {hobby.videos.length > 0 && (
        <div className="hobby-videos">
          {hobby.videos.map((v) => (
            <VideoThumb
              key={v.id}
              video={v}
              color={hobby.color}
              onPlay={onPlay}
            />
          ))}
        </div>
      )}

      {/* Liens externes */}
      {hobby.links.length > 0 && (
        <div className="hobby-links">
          {hobby.links.map(({ label, url }) => (
            <a
              key={label}
              href={url}
              target="_blank"
              rel="noreferrer"
              className="hobby-link"
            >
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                width="14"
                height="14"
              >
                <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                <polyline points="15 3 21 3 21 9" />
                <line x1="10" y1="14" x2="21" y2="3" />
              </svg>
              {label}
            </a>
          ))}
        </div>
      )}

      {/* Barre décorative colorée */}
      <div className="hobby-color-bar" />
    </div>
  );
}

// ─────────────────────────────────────────
// Page principale
// ─────────────────────────────────────────
export default function Hobbies() {
  const [activeVideo, setActiveVideo] = useState(null);

  return (
    <section className="hobbies-section">
      {/* Label */}
      <div className="section-label">
        <span className="label-line" />
        <span className="label-text">Centres d'intérêts</span>
      </div>

      <div className="hobbies-header">
        <h2 className="hobbies-title">
          Ce qui me passionne
          <br />
          <span className="hobbies-title-accent">au quotidien</span>
        </h2>
        <p className="hobbies-subtitle">
          Au-delà du code, voici les univers qui nourrissent ma créativité et
          mon équilibre.
        </p>
      </div>

      {/* Grille masonry */}
      <div className="hobbies-grid">
        {hobbies.map((hobby) => (
          <HobbyCard key={hobby.id} hobby={hobby} onPlay={setActiveVideo} />
        ))}
      </div>

      {/* Modale vidéo */}
      <VideoModal video={activeVideo} onClose={() => setActiveVideo(null)} />
    </section>
  );
}

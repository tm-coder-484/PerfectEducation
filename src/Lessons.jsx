import Card from "./Card.jsx";
import { useState, useEffect } from 'react';
import Math from "./assets/images/math.jpg";
import Coding from "./assets/images/coding.png";
import English from "./assets/images/english.jpeg";
import History from "./assets/images/history.png";
import Science from "./assets/images/science.png";
import Music from "./assets/images/music.webp";
import German from "./assets/images/german.webp";
import Arts from "./assets/images/art.jpg";
import Logo from "./assets/logo.png";

function Lessons() {
    const [lessons, setLessons] = useState([]);
    const [error, setError] = useState(null);

    const parseLessonsResponse = (payload) => {
        if (Array.isArray(payload)) return payload;
        if (payload == null) return [];

        if (typeof payload === 'string') {
            const trimmed = payload.trim();
            if (!trimmed) return [];

            try {
                return parseLessonsResponse(JSON.parse(trimmed));
            } catch {
                return [];
            }
        }

        if (payload && typeof payload === 'object') {
            for (const key of ['lessons', 'data', 'results', 'items']) {
                if (Array.isArray(payload[key])) return payload[key];
            }

            for (const value of Object.values(payload)) {
                if (Array.isArray(value)) return value;
            }
        }

        return [];
    };

    useEffect(() => {
        const loadLessons = async () => {
            try {
                const base = ['localhost', '127.0.0.1'].includes(window.location.hostname)
                    ? 'http://localhost:8000'
                    : '';
                const res = await fetch(`${base}/api/lessons/display`);
                if (!res.ok) {
                    setError(`Error fetching lessons: HTTP ${res.status}`);
                    console.error(`Error fetching lessons: HTTP ${res.status}`);
                    return;
                }

                const responseText = await res.text();
                let parsedData = [];

                try {
                    parsedData = responseText ? JSON.parse(responseText) : [];
                } catch {
                    parsedData = responseText;
                }
                console.log('Fetched lessons data:', parsedData);
                setLessons(parseLessonsResponse(parsedData));
            } catch (error) {
                setError('Failed to load lessons');
                console.error('Error fetching lessons:', error);
            }
        };
        loadLessons();
    }, []);

    return (
        <>
          <div className="content">
            <h1 className="main-heading">Available Lessons</h1>
            <h3 className="sub-heading">We have many online lessons, kind of like Stile.</h3>
            {error && <p className="error">{error}</p>}
            <div className="card-row">
                {lessons.map(lesson => (
                    <Card
                        key={lesson.id}
                        text={lesson.title}
                        paragraph={lesson.description}
                        imgsrc={lesson.image}
                        link={lesson.link || '#'}
                    />
                ))}
            </div>
          </div>
        </>
    )
}

export default Lessons;
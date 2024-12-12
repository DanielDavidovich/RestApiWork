import { useEffect, useState } from "react";
import Albums from "./Albums";

export default function Form() {
    const [songs, setSongs] = useState([]);

    useEffect(() => {
        const fetchAlbumData = async () => {
            try {
                const response = await fetch("https://www.theaudiodb.com/api/v1/json/2/album.php?i=112024");
                const result = await response.json();
                console.log(result);

                const songs = result.album;
                const formattedSongs = songs.map(song => {
                    const randomMonth = String(Math.floor(Math.random() * 12) + 1).padStart(2, "0");
                    const randomDay = String(Math.floor(Math.random() * 28) + 1).padStart(2, "0");
                    const date = `${song.intYearReleased}/${randomMonth}/${randomDay}`;

                    return {
                        name: song.strAlbum,
                        description: song.strDescriptionEN,
                        image: song.strAlbumThumb,
                        date: date,
                    };
                });
                setSongs(formattedSongs);
            } catch (err) {
                console.log(err);
            }
        };
        fetchAlbumData();

    }, []);

    return (
        <div>
            <div className="Form">
                <Albums albums={songs} />
            </div>
        </div>
    );
}

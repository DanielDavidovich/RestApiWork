import Item from "./Item";

export default function Albums(props) {
    return (
        <div>
            {
                props.albums.map((album, index) => (
                    <Item
                        key={index}
                        image={album.image}
                        name={album.name}
                        date={album.date}
                        description={album.description}
                    />
                ))
            }
        </div>
    )
}
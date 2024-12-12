export default function Date(props) {
    const DATE = props.date;
    const [year, month, day] = DATE.split('/');
    const FULL_DATE = `${day}/${month}/${year}`;

    return (
        <div className="date">
            <div><b>
                Release date: {FULL_DATE}
            </b></div>
            <br></br>
        </div>
    )
}
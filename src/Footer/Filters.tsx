function Filters() {
    return (
        <ul className="filters">
            <li>
                <button className="selected">Все</button>
            </li>
            <li>
                <button>Активные</button>
            </li>
            <li>
                <button>Готовые</button>
            </li>
        </ul>
    );
}

export default Filters;
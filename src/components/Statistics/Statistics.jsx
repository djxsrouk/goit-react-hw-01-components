import styles from './Statistics.module.css';
import PropTypes from 'prop-types';

    function generateRandomColor(){
        const letters = "0123456789ABCDEF";
        let color = "#";
      
        for (let i = 0; i < 6; i++) {
          color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
    };
    console.log(generateRandomColor()); 

    function Statistics({title, stats}) {
        return (
            <section className={styles.statistics}>
                {title && <h2 className={styles.title}>{title}</h2>}
                <ul className={styles.statList}>
                    {stats.map(stat => (
                        <li key={stat.id} className={styles.itemStat} style={{backgroundColor: generateRandomColor()}}>
                            <span className={styles.label}>{stat.label}</span>
                            <span className={styles.percentage}>{stat.percentage}%</span>
                        </li>
                    ))}
                </ul>
            </section>
        );
    };    

Statistics.propTypes = {
    title: PropTypes.string,
    stats: PropTypes.arrayOf(
        PropTypes.shape({
            label: PropTypes.string.isRequired,
            percentage: PropTypes.number.isRequired
        }).isRequired
    ).isRequired
};

export default Statistics;
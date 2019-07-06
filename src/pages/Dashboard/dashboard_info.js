import React from 'react';
import ChartistGraph from 'react-chartist';


// Chartist.Pie('#chartPreferences', dataPreferences, optionsPreferences);

// Chartist.Pie('#chartPreferences', {
// labels: ['62%','32%','6%'],
// series: [62, 32, 6]
// });
const preferences = {
    title: 'Koin',
    description:'Pantau sisa koin untuk peminjaman',
    icon: 'fas fa-dollar-sign',
    bg_col: '#fff',
    message_text: 'Sisa Koin',
    value: '10',
    type: 'Koin',
    lastupdated: '3 Hari Yang Lalu'
};

const UserCards = ({title, description, icon, bg_col, message_text, value, type, lastupdated}) => {

    let styles = {
        backgroundColor: bg_col,
        color: '#000',
    }

    return (

        <div className="card">
            <div className="header">
                <h3 className="title">{title}</h3>
            </div>
            <div className="content row row-eq-height">
                <div className="circleicon col-lg-4" style={styles}>
                    <i className={icon}></i>
                </div>
                <div className="col-lg-8">
                    <h5>{message_text}</h5>
                    <h3><b>{value}{type}</b></h3>
                </div>
            </div>
            <div className="footer">
                <hr />
                <div className="stats">
                    <i className="fas fa-history"></i> Di<em>update</em> {lastupdated}
                </div>
            </div>
        </div>

    );
};

export default UserCards;
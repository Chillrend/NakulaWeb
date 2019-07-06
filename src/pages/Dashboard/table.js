import React from 'react';



const StripedTable = ({data, title, category}) => (
    <div className="card">
        <div className="header">
            <h4 className="title">{title}</h4>
            <p className="category">{category}</p>
        </div>
        <div className="content table-responsive table-full-width">
            <table className="table table-hover table-striped">
                <thead>
                <tr>
                    {
                        Object.keys(data.data[0]).map(column => (
                            <th>{column}</th>
                        ))
                    }
                </tr>
                </thead>
                <tbody>
                {data.data.map(item => (
                    <tr>
                        {Object.keys(data.data[0]).map(column => (
                            <td>{item[column]}</td>
                        ))}
                    </tr>
                ))}
                </tbody>
            </table>

        </div>
    </div>
);

export default StripedTable;
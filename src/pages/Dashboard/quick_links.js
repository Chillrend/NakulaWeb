import React from "react";
import { Link, withRouter } from 'react-router-dom';

const QuickLinks = ({datums}) => (
    <div className="row">
        {
            datums.map(items => (
                <Link to={items.toLink}>
                    <div className="font-icon-list col-lg-2 col-md-3 col-sm-4 col-xs-6" key={items.toLink}>
                        <div className="font-icon-detail"><i className={items.icon}></i>
                            <input disabled type="text" defaultValue={items.title} />
                        </div>
                    </div>
                </Link>
            ))

        }
    </div>
);

export default withRouter(QuickLinks);

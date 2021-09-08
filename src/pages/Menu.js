import React from 'react'

function Menu() {
    const menu = [
        {
            name: "The McCheese",
            desc: "The McCheesiest McZa You'll Ever McEat",
            tops: ["wes's special sauce", "parm", "mozz", "peppa jack"],
            cost: 7.00
        },
        {
            name: "The Ham",
            desc: "<3",
            tops: ["ham", "bacon", "parm"],
            cost: 7.00
        },
        {
            name: "The Dan Special",
            desc: "\"The way Za was meant to be enjoyed\"",
            tops: ["wes's special sauce", "parm", "that jawnt baked to perfection!"],
            cost: 7.00
        }
    ];

    return (
        <div className="container menu-pg page-content">
            <h1 className="pg-header">Zas</h1>
            {menu.map((item) => {
                return (
                    <div className="card">
                        <div className="card-header">
                            <span className="name">{item.name}</span>
                            <span className="cost">${item.cost}</span>
                        </div>
                        <div className="card-body">
                            <h5 className="desc">{item.desc}</h5>
                            <p className="tops">{item.tops.join(', ')}</p>
                        </div>
                        <a className="btn" href="https://venmo.com/vinnie-tay" rel="noreferrer noopener" target="_blank">Order 🍕</a>
                    </div>
                )
            })}
        </div>
    )
}

export default Menu

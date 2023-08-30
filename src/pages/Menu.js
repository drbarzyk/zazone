import React from 'react'

function Menu() {
    const menu = [
        {
            name: "The McCheese",
            desc: "The McCheesiest McZa You'll Ever McEat",
            tops: ["parm", "mozz", "wes's special sauce"],
            cost: 7.00
        },
        {
            name: "The Ham",
            desc: "<3",
            tops: ["ham", "bacon", "parm"],
            cost: 7.00
        },
        {
            name: "The Margherita",
            desc: "Enjoy the Italian flag on a Za 🇮🇹",
            tops: ["mozz", "basil", "wes's special sauce"],
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

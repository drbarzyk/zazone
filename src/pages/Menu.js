import React from 'react'

// function buildMenu() {
//     const menu = [
//         {
//             name: "The McCheese",
//             desc: "The McCheesiest McPizza you'll ever McEat",
//             tops: ["Parmesan", "Wes's Special Sauce"],
//             cost: 7.00
//         },
//         {
//             name: "The Ham",
//             desc: "<3",
//             tops: ["Ham", "Bacon", "Parmesan"],
//             cost: 7.00
//         },
//         {
//             name: "The HighPAs Pie",
//             desc: "Official Pizza of the HighPAs Podcast",
//             tops: ["Blacksburg's Finest Bud", "Wes's Special Sauce", "Smoked Mozz"],
//             cost: 10.00
//         }
//     ];
//     let items = [];
//     for (let i = 0; i < menu.length; i++) {
//         const item = menu[i];
//         items.push(<MenuItem name={item.name} desc={item.desc} tops={item.tops} cost={item.cost}/>);
//     }
//     return items;
// }

function Menu() {
    const menu = [
        {
            name: "The McCheese",
            desc: "The McCheesiest McZa You'll Ever McEat",
            tops: ["Wes's Special Sauce", "Parmesan"],
            cost: 7.00
        },
        {
            name: "The Ham",
            desc: "<3",
            tops: ["Ham", "Bacon", "Parmesan"],
            cost: 7.00
        },
        {
            name: "The HighPAs Pie",
            desc: "The Official Za of the HighPAs Podcast",
            tops: ["Blacksburg's Finest Bud", "Wes's Special Sauce", "Smoked Mozz"],
            cost: 10.00
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

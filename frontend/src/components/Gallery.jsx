import React from 'react';

const Gallery = ({
    //Add your pictures here. Thd description will be your alternative text as well as the description when you hover over the photo.
    pictures = [
        { 
            name: "Mountains", 
            url: "https://scontent-phx1-1.xx.fbcdn.net/v/t39.30808-6/468307440_979297587568879_8811754363605951493_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=833d8c&_nc_ohc=pSgoo3LbKwwQ7kNvgEoXY1p&_nc_zt=23&_nc_ht=scontent-phx1-1.xx&_nc_gid=A6aASOTFVaHT-zppjj1_3Ie&oh=00_AYBC04CPEG0rfEXDF5x_5XxxlWp37reXanauMp0mtmGqYQ&oe=67A1E4C8",
            description: "Add description here"
        },
        { 
            name: "Sunset", 
            url: "https://scontent-phx1-1.xx.fbcdn.net/v/t39.30808-6/453428995_893952056103433_5172278616391615491_n.jpg?stp=cp6_dst-jpg_tt6&_nc_cat=102&ccb=1-7&_nc_sid=833d8c&_nc_ohc=IlQWHdL7NqwQ7kNvgG3sW3s&_nc_zt=23&_nc_ht=scontent-phx1-1.xx&_nc_gid=AXi_DjExr7RTZujSKDMbMqp&oh=00_AYBKeo6MS4ShssEgd5ewtTzgcVO1qABNaoYOQ-W18tK-CQ&oe=67A1D9A8",
            description: "Add description here"
        },
        { 
            name: "Autumn", 
            url: "https://scontent-phx1-1.xx.fbcdn.net/v/t39.30808-6/456144200_906700621495243_7472444235277677943_n.jpg?stp=cp6_dst-jpg_tt6&_nc_cat=111&ccb=1-7&_nc_sid=833d8c&_nc_ohc=fQYHrgpOz04Q7kNvgGxQroG&_nc_zt=23&_nc_ht=scontent-phx1-1.xx&_nc_gid=Ak4jslPtq2Xb9C-b8E_3t7P&oh=00_AYCA6HvgkewrrcBYOzx8wSNgfwD7z7Y_ZZpiVcmjz8mT7w&oe=67A1D11D",
            description: "Add description here"
        },
        { 
            name: "Grass", 
            url: "https://scontent-phx1-1.xx.fbcdn.net/v/t39.30808-6/429532096_794444439387529_5685194620783187067_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=833d8c&_nc_ohc=xAUTHVIUTp0Q7kNvgFG9gAI&_nc_zt=23&_nc_ht=scontent-phx1-1.xx&_nc_gid=Aiydp_rh_9Pi--pOf0HYUaI&oh=00_AYB3cMTPSiTFgXHEjLtrYLHWjUacTQQehpSDvRwx7akwMw&oe=67A1D018",
            description: "Add description here"
        },
        { 
            name: "Mesa", 
            url: "https://scontent-phx1-1.xx.fbcdn.net/v/t39.30808-6/429516979_794444256054214_48132793693536330_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=833d8c&_nc_ohc=YaXxJ7thvZwQ7kNvgF6hq6C&_nc_zt=23&_nc_ht=scontent-phx1-1.xx&_nc_gid=AeAPjho4tgn_MMVRqWzxka9&oh=00_AYCbCY5pcNziur0RlWPIW7z92TJzGLHJlwF5kFbo_05Xxg&oe=67A1B2CC",
            description: "Add description here"
        },
        { 
            name: "City", 
            url: "https://scontent-phx1-1.xx.fbcdn.net/v/t39.30808-6/425702794_781845403980766_6092119261606456765_n.jpg?stp=cp6_dst-jpegr_tt6&_nc_cat=103&ccb=1-7&_nc_sid=833d8c&_nc_ohc=u-6cdleQqP4Q7kNvgHq7dhp&_nc_zt=23&se=-1&_nc_ht=scontent-phx1-1.xx&_nc_gid=A0oQhUE74pt_1FVVQhq3qNX&oh=00_AYByml3ZCBt0tzUDECr-5ErtVGRKtihzs3xse206p2ZP6w&oe=67A1B529",
            description: "Add description here"
        },
        { 
            name: "Snow", 
            url: "https://scontent-phx1-1.xx.fbcdn.net/v/t39.30808-6/418430780_764948275670479_6384509157735157427_n.jpg?stp=cp6_dst-jpegr_tt6&_nc_cat=110&ccb=1-7&_nc_sid=833d8c&_nc_ohc=q0yCw4gy6C0Q7kNvgHCZYdc&_nc_zt=23&se=-1&_nc_ht=scontent-phx1-1.xx&_nc_gid=AxxSR1thQvyo7hJyvD5Clus&oh=00_AYA56rDrH9STR4LDKgOnBC1turveV5xhZkS6h-c0eJlHcg&oe=67A1C0AA",
            description: "Add description here"
        },
        { 
            name: "Beach", 
            url: "https://scontent-phx1-1.xx.fbcdn.net/v/t39.30808-6/314978323_8370094323060646_5585656483634596489_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=833d8c&_nc_ohc=B2_Q50a-sQEQ7kNvgGjtgVV&_nc_zt=23&_nc_ht=scontent-phx1-1.xx&_nc_gid=AFt-UuWeJngGEOHzEfq1Nwj&oh=00_AYBjeYXYtb1n7vi49CRVexL8ch3d4Y-p5pRLm1RHJINALQ&oe=67A1B78D",
            description: "Add description here"
        },
        { 
            name: "Flowers", 
            url: "https://scontent-phx1-1.xx.fbcdn.net/v/t39.30808-6/366315946_679503307548310_5637704026695468933_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=833d8c&_nc_ohc=1NbAgOcDlyQQ7kNvgHKls2T&_nc_zt=23&_nc_ht=scontent-phx1-1.xx&_nc_gid=ATaq_hSfUA3cAB7DbCf7xAP&oh=00_AYBkoM7DT1O6zGL6oF1R1I7MOx622CMcBrkNQlfHyh9Vgw&oe=67A1BFCA",
            description: "Add description here"
        },
        { 
            name: "Forest", 
            url: "https://scontent-phx1-1.xx.fbcdn.net/v/t39.30808-6/347556949_658248653007109_1174284488701267592_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=833d8c&_nc_ohc=TG0gr1KKp0oQ7kNvgFb_YYy&_nc_zt=23&_nc_ht=scontent-phx1-1.xx&_nc_gid=ADH3J5ApJBiVeqVzGYvy_lL&oh=00_AYDM0-UxD6Gn96fqvY7jl83EXFicShobfwLmACJJqoqKUg&oe=67A1CFE4",
            description: "Add description here"
        },
        { 
            name: "Meadow", 
            url: "https://scontent-phx1-1.xx.fbcdn.net/v/t39.30808-6/353464615_656668059831835_6655853478235374363_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=833d8c&_nc_ohc=ohbPU_pLn-gQ7kNvgF3It0w&_nc_zt=23&_nc_ht=scontent-phx1-1.xx&_nc_gid=A70LAAxae-KuTcKTzOu5w5-&oh=00_AYDa4vhhBqb22LJz6IEo_pPCN9BdI_j_tUN8H1uLu9grgw&oe=67A1D2DF",
            description: "Add description here"
        },
        { 
            name: "Lake", 
            url: "https://scontent-phx1-1.xx.fbcdn.net/v/t39.30808-6/347238982_3361819577480778_2645968972015758685_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=833d8c&_nc_ohc=MvE8Brrte_UQ7kNvgGyE83h&_nc_zt=23&_nc_ht=scontent-phx1-1.xx&_nc_gid=AfNz4f1JLR0Nxh0ET5ZoQom&oh=00_AYBwjOxMjMy7k_hNyZBd2S44u-pnSzgIqqpIM8bpcnIEPA&oe=67A1D4A8",
            description: "Add description here"
        },
        { 
            name: "Volcano", 
            url: "https://scontent-phx1-1.xx.fbcdn.net/v/t39.30808-6/335668818_688827596374841_6359391899505067081_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=833d8c&_nc_ohc=8X3PT5mBbBwQ7kNvgGmsYzl&_nc_zt=23&_nc_ht=scontent-phx1-1.xx&_nc_gid=AkA0kmBixY1y1HcCxQGUOQx&oh=00_AYBSRt2Grs6tdhUkVS0Xg3rF638bEgjCuOtoKatFX1OZ7w&oe=67A1B543",
            description: "Add description here"
        },
        { 
            name: "Underwater", 
            url: "https://scontent-phx1-1.xx.fbcdn.net/v/t39.30808-6/475078693_1025794499585854_2323278848890452519_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=833d8c&_nc_ohc=J6x4Kjkvf7wQ7kNvgFefX1K&_nc_zt=23&_nc_ht=scontent-phx1-1.xx&_nc_gid=AXbBYq8Agh7Zvm8KlZyi25G&oh=00_AYDSRgJXCZ5f1tE5zpXwcl6RBqY4PS3AZybMrSc9a5NIHA&oe=67A1D9EC",
            description: "Add description here"
        },
        { 
            name: "Cliff", 
            url: "https://scontent-phx1-1.xx.fbcdn.net/v/t39.30808-6/327169232_724139569376130_6619739900386276306_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=6ee11a&_nc_ohc=FcbIjxH3qW8Q7kNvgEA_ST-&_nc_zt=23&_nc_ht=scontent-phx1-1.xx&_nc_gid=AYEMzLB7zl5pe06hw5AxPfi&oh=00_AYAtl30rsX758JQZj2GnciBVIxXxmtC6WpjpNO747pv38g&oe=67A1B92A",
            description: "Add description here"
        }
    ]
}) => {
    return (
        // Make sure Tailwind is installed and set in your config for the given effect
        <div className=" p-5 md:p-10">
            <div className="columns-1 gap-5 lg:gap-8 sm:columns-2 lg:columns-3 xl:columns-4 [&>div:not(:first-child)]:mt-5 lg:[&>div:not(:first-child)]:mt-8">
                {/* This takes all the pictures and sets it into a masonary grid */}
                {pictures.map((picture, index) => (
                    <div 
                        key={index} 
                        className="relative group cursor-pointer overflow-hidden " 
                        style={{ 
                            marginTop: index !== 0 ? "1.25rem" : "0",
                            "@media (min-width: 1024px)": { 
                                marginTop: index !== 0 ? "2rem" : "0" 
                            }
                        }}
                    >
                        <img
                            src={picture.url}
                            alt={picture.description}
                            className="w-full transition-transform duration-300 group-hover:scale-110 "
                        />
                        <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-75 transition-all duration-500 ease-in-out flex items-center justify-center">
                            <div className="text-white text-center px-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-in-out transform translate-y-50 group-hover:translate-y-50">
                                <h3 className="text-2xl font-bold mb-2">{picture.name}</h3>
                                <p className="text-sm line-clamp-3">{picture.description}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

//Exports the Gallery

export default Gallery
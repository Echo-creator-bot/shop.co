const CATALOG = [
    {
        /* для карточки*/
        id:1,
        titleImg: "/image/One_Life_Graphic_T-shirt.png",
        name: "One Life Graphic T-shirt",
        rating: 4.5,
        price: 260,
        oldPrice: 300,
        discount: 40,
        /* это дополнениие для всей страницы */ 
        images:["/image/One_Life_Graphic_T-shirt.png", "/image/One_Life_Graphic_T-shirt-BACK.png", "/image/One_Life_Graphic_T-shirt-ON.png"],
        description:"This graphic t-shirt which is perfect for any occasion. Crafted from a soft and breathable fabric, it offers superior comfort and style.",
        colors:["Olive Drab","Dark Teal","Dark Blue"],
        sizes: ["Small", "Medium","Large", "X-Large"],
        productDetails: `Fabric & Material: Premium 100% combed ring-spun cotton (fabric weight: 4.2 oz). The fabric is pre-shrunk to maintain its shape and size wash after wash. It's incredibly soft against the skin, breathable for warm days, and durable enough for everyday wear.

Design & Print: Statement "One Life" graphic printed using high-density screen print technology. We use eco-friendly, water-based inks that are soft to the touch and free from harmful chemicals. The print is stretchable and flexible, ensuring it won't crack, peel, or fade over time.

Construction & Details:

1x1 ribbed crewneck collar with spandex for enhanced elasticity and shape retention

Shoulder-to-shoulder taping for a clean finish and extra durability

Double-needle stitching at sleeves and bottom hem for long-lasting wear

Side-seamed construction prevents twisting and maintains the garment's structure

Fit & Sizing: Unisex modern fit — not too tight, not too loose. True to size with a relaxed silhouette that works for all body types. Model is 6'0" (183 cm) and wears size M for a regular, everyday look.

Care Instructions: Machine wash cold with like colors, gentle cycle. Do not bleach. Tumble dry low or hang dry. Iron inside out if needed.`,
        faq:[
            {
                idQuest: 1,
                question: "How does this T-shirt fit? Is it true to size?",
                answer: "The One Life Graphic T-shirt has a unisex modern fit — relaxed but not oversized. We recommend sticking to your usual size. If you're between sizes or prefer an oversized look, go one size up."
            },
            {
                idQuest: 2,
                question: "Will the shirt shrink after washing?",
                answer: "No! The fabric is pre-shrunk (100% combed ring-spun cotton), so it maintains its shape and size wash after wash."
            },
            {
                idQuest: 3,
                question: "Will the print crack or peel over time?",
                answer: "No. We use high-quality screen printing with eco-friendly, water-based inks. The print is flexible and moves with the fabric. Just wash inside out in cold water to keep it looking new."
            },
            {
                idQuest: 4,
                question: "Is the fabric soft? Is it see-through?",
                answer: "Yes, it's incredibly soft thanks to 100% combed ring-spun cotton (4.2 oz). It's lightweight and breathable. Lighter colors may be slightly sheer — we recommend neutral undergarments. Dark colors offer full coverage."
            },
            {
                idQuest: 5,
                question: "How do I wash it properly?",
                answer: "Easy! Wash inside out in cold water on a gentle cycle. Tumble dry low or hang dry. Iron inside out — never directly on the print."
            },
        ]
    },
]
const COMMENTS = [
    {
        idCom: 1,
        productID: 1,
        ratingCom: 4.5,
        nameCom: "Samantha D.",
        textCom: "I absolutely love this t-shirt! The design is unique and the fabric feels so comfortable. As a fellow designer, I appreciate the attention to detail. It's become my favorite go-to shirt.",
        Posted: "14-08-2023"
    },
    {
        idCom: 2,
        productID: 1,
        ratingCom: 4,
        nameCom: "Alex M.",
        textCom: "The t-shirt exceeded my expectations! The colors are vibrant and the print quality is top-notch. Being a UI/UX designer myself, I'm quite picky about aesthetics, and this t-shirt definitely gets a thumbs up from me.",
        Posted: "15-08-2023"
    },
    {
        idCom: 3,
        productID: 1,
        ratingCom: 3.5,
        nameCom: "Ethan R.",
        textCom: "This t-shirt is a must-have for anyone who appreciates good design. The minimalistic yet stylish pattern caught my eye, and the fit is perfect. I can see the designer's touch in every aspect of this shirt.",
        Posted: "16-08-2023"
    },
    {
        idCom: 4,
        productID: 1,
        ratingCom: 4,
        nameCom: "Olivia P.",
        textCom: "As a UI/UX enthusiast, I value simplicity and functionality. This t-shirt not only represents those principles but also feels great to wear. It's evident that the designer poured their creativity into making this t-shirt stand out.",
        Posted: "17-08-2023"
    },
    {
        idCom: 5,
        productID: 1,
        ratingCom: 4,
        nameCom: "Liam K.",
        textCom: "This t-shirt is a fusion of comfort and creativity. The fabric is soft, and the design speaks volumes about the designer's skill. It's like wearing a piece of art that reflects my passion for both design and fashion.",
        Posted: "18-08-2023"
    },
    {
        idCom: 6,
        productID: 1,
        ratingCom: 4.5,
        nameCom: "Ava H.",
        textCom: "I'm not just wearing a t-shirt; I'm wearing a piece of design philosophy. The intricate details and thoughtful layout of the design make this shirt a conversation starter.",
        Posted: "19-08-2023"
    },
]
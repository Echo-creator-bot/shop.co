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
        dressStyle: 'Casual',
        type: 'T-shirt',
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
    {
        id:2,
        titleImg: "/image/T-SHIRT_WITH_TAPE_DETAILS.png",
        name: "T-SHIRT WITH TAPE DETAILS",
        rating: 4.5,
        price: 1120,
        oldPrice: null,
        discount: null,
        images:["/image/T-SHIRT_WITH_TAPE_DETAILS.png"],
        description:"A streetwear essential featuring contrasting tape details on the sleeves. Made from heavyweight cotton for a structured look that lasts all day.",
        colors:["Black", "White", "Heather Grey"],
        sizes: ["Small", "Medium","Large", "X-Large"],
        dressStyle: 'Casual',
        type: 'T-shirt',
        productDetails: `Fabric & Material: Made from 100% heavyweight cotton (fabric weight: 5.3 oz). This fabric is structured, durable, and resistant to stretching out, giving the shirt a premium, rigid feel that streetwear enthusiasts love.

Design & Print: Features signature contrasting tape detailing on the outside of the shoulders and sleeves. The tape is made from a smooth polyester blend and is bar-tacked at stress points for maximum durability. It's not just a design element; it's a construction feature that reinforces the garment.

Construction & Details:

- Classic crewneck collar with a tough ribbed knit that resists stretching.
- High-density tape stripes applied with heat-seal and reinforced stitching.
- Double-needle coverstitching on the hem and sleeves for a clean, industrial finish.
- Pre-shrunk fabric to minimize shrinkage after washing.

Fit & Sizing: Regular fit, true to size. Designed to be worn as a classic, no-fuss t-shirt. If you prefer a more relaxed drape, we recommend sizing up. Model is 6'1" (185 cm) and wears size Large for a comfortable fit.

Care Instructions: Machine wash cold with like colors. Do not bleach. Tumble dry low. The tape details are heat-sealed and stitched; for longevity, avoid ironing directly on the tape.`,
        faq:[
            {
                idQuest: 4,
                question: "What are the tape details made of? Won't they peel off?",
                answer: "The tape is made from a durable polyester blend and is both heat-sealed AND reinforced with stitching at the edges and stress points. It's designed to last the lifetime of the shirt and withstand regular wear and washing."
            },
            {
                idQuest: 5,
                question: "Is the fabric heavy? I want it for cooler weather.",
                answer: "Yes, at 5.3 oz, this is a mid-to-heavyweight cotton shirt. It has a substantial feel and holds its shape well, making it perfect for layering or wearing on its own in cooler temperatures."
            },
            {
                idQuest: 6,
                question: "Is this shirt pre-shrunk?",
                answer: "Yes, the fabric has been pre-shrunk to minimize shrinkage. If you follow the care instructions (tumble dry low), you can expect it to maintain its original size and fit."
            },
        ]
    },
    {
        id: 3,
        titleImg: "/image/Faded Skinny Jeans.png",
        name: "FADED SKINNY JEANS",
        rating: 4.5,
        price: 210,
        oldPrice: null,
        discount: null,
        images:["/image/Faded Skinny Jeans.png"],
        description:"Classic skinny jeans with a vintage faded wash. Designed for a sleek, second-skin fit that moves with you while maintaining its shape throughout the day.",
        colors:["Light Blue", "Medium Blue", "Dark Grey"],
        sizes: ["Small", "Medium","Large", "X-Large"],
        dressStyle: 'Casual',
        type: 'Jeans',
        productDetails: `Fabric & Material: Crafted from 98% cotton and 2% elastane (denim weight: 11.5 oz). The addition of elastane provides the perfect amount of stretch for comfort without compromising the authentic denim look and structure.

Design & Wash: Features a classic vintage faded wash that creates a worn-in, lived-in appearance from day one. The fading is strategically placed on the thighs and knees for a natural look, while the whiskering on the front adds to the authentic vintage aesthetic.

Construction & Details:

- Classic five-pocket styling with signature branded rivets
- Zip fly with button closure
- Belt loops fit belts up to 1.5 inches wide
- Contrast stitching in a classic golden tone
- Leather brand patch on the back waist
- Clean finished hems (unfinished, ready to cuff or hem to your preference)

Fit & Sizing: True skinny fit through the hip and thigh with a narrow leg opening. The stretch fabric allows for a snug fit that won't bag out during wear. Inseam length is 32 inches (81 cm) for all sizes. Model is 6'0" (183 cm) and wears size 32 for a classic skinny look.

Care Instructions: Machine wash cold inside out with like colors. Do not bleach. Tumble dry low or hang dry for best results. To preserve the fade pattern, avoid overwashing.`,
        faq:[
            {
                idQuest: 7,
                question: "How much stretch do these jeans have? Will they loosen up?",
                answer: "These jeans have a comfortable 2% elastane blend, giving them a 4-way stretch. They will conform to your body but won't bag out or lose their shape throughout the day. We recommend buying your true size."
            },
            {
                idQuest: 8,
                question: "Are these jeans true to size? I have muscular thighs.",
                answer: "The Faded Skinny Jeans are designed with a true skinny fit through the hip and thigh. Thanks to the stretch fabric, they accommodate various body types well. If you have particularly muscular thighs, you might consider sizing up for extra comfort."
            },
            {
                idQuest: 9,
                question: "Will the fading fade away after washing?",
                answer: "No, the vintage wash is set during manufacturing. While all denim will experience some natural fading over time with wear, the intentional fade pattern is designed to last. Washing inside out in cold water helps preserve the original look."
            },
        ]
    },
    {
        id: 4,
        titleImg: "/image/Polo_with_Contrast_Trims.png",
        name: "Polo with Contrast Trims",
        rating: 4.0,
        price: 212,
        oldPrice: 242,
        discount: 20,
        images:["/image/Polo_with_Contrast_Trims.png"],
        description:"A classic polo shirt elevated with contrasting trim on the collar and cuffs. Perfect for smart-casual occasions where you want to look put together without sacrificing comfort.",
        colors:["Blue", "White", "Grey", "Cream"],
        sizes: ["Small", "Medium","Large", "X-Large"],
        dressStyle: 'Formal',
        type: 'T-shirts',
        productDetails: `Fabric & Material: Premium 100% combed cotton pique (fabric weight: 6.0 oz). The textured pique knit offers breathability and structure, while the combed cotton ensures a soft feel against the skin without irritation.

Design & Trims: Features signature contrast trim on the collar and ribbed cuffs. The collar maintains its shape with a flexible inner lining that won't curl over time. The two-button placket has natural shell buttons for an elevated, refined look.

Construction & Details:

- Classic polo collar with contrast tipping detail
- 2-button placket with reinforced stitching and natural shell buttons
- Ribbed cuffs with matching contrast trim
- Side vents at hem for ease of movement
- Straight hem with a slightly longer back cut
- Taped neck seam for comfort and durability
- Embroidered brand logo on left chest (subtle, tonal stitching)

Fit & Sizing: Modern classic fit — tailored through the body but not overly slim. Designed to be tucked in or worn untucked. True to size with a clean silhouette that flatters without being restrictive. Model is 6'1" (185 cm) and wears size Medium for a classic fit.

Care Instructions: Machine wash cold with like colors. Do not bleach. Tumble dry low or hang to dry. Iron on medium heat if needed. To maintain collar shape, button the top button when washing.`,
        faq:[
            {
                idQuest: 10,
                question: "Is this suitable for business casual environments?",
                answer: "Absolutely. The contrast trims add a touch of sophistication that makes this polo appropriate for most business casual settings. Pair it with chinos or tailored trousers for a polished, professional look."
            },
            {
                idQuest: 11,
                question: "How does the pique fabric feel? Is it too heavy for summer?",
                answer: "The 6.0 oz pique cotton is breathable and perfect for year-round wear. The textured knit creates natural air pockets that keep you cool in warm weather, while the weight provides enough substance for cooler days. It's a versatile, all-season fabric."
            },
            {
                idQuest: 12,
                question: "Will the collar keep its shape after washing?",
                answer: "Yes! The collar has a flexible inner lining specifically designed to prevent curling and maintain its structure wash after wash. Buttoning the top button during washing also helps preserve the collar's shape."
            },
        ]
    },
    {
        id: 5,
        titleImg: "/image/SKINNY FIT JEANS.png",
        name: "Skinny Fit Jeans",
        rating: 3.5,
        price: 240,
        oldPrice: 260,
        discount: 20,
        images:["/image/SKINNY FIT JEANS.png"],
        description:"Modern skinny jeans with a clean, dark wash. Designed for a sleek silhouette that hugs the leg from hip to ankle, creating a streamlined look that pairs perfectly with any footwear.",
        colors:["Black", "Dark Blue", "Medium Blue", "Light Grey"],
        sizes: ["Small", "Medium","Large", "X-Large"],
        dressStyle: 'Casual',
        type: 'Jeans',
        productDetails: `Fabric & Material: Premium blend of 92% cotton, 6% polyester, and 2% elastane (denim weight: 10.5 oz). The cotton provides authentic denim feel, polyester adds durability, and elastane delivers essential stretch for all-day comfort.

Design & Wash: Features a clean, versatile dark wash with minimal fading. The non-distressed finish makes these jeans appropriate for both casual settings and elevated smart-casual occasions. The dark colorway creates a lengthening effect for a flattering silhouette.

Construction & Details:

- Classic five-pocket construction with reinforced stitching
- YKK zipper fly with branded button closure
- Signature leather patch on back waist
- Copper-toned rivets at stress points for durability
- Clean, finished hems (ready to wear at 32" inseam)
- Contrast stitching in coordinating thread color
- Belt loops accommodate belts up to 1.75 inches

Fit & Sizing: True skinny fit through the hip, thigh, and leg with a narrow 6-inch leg opening (size 32). The stretch fabric hugs the body while allowing freedom of movement. Inseam length is 32 inches (81 cm) for all sizes. Model is 6'0" (183 cm) and wears size 32 for a classic skinny look.

Care Instructions: Machine wash cold inside out to preserve the dark color. Use mild detergent and avoid fabric softeners which can break down elastane fibers. Tumble dry low or line dry. For best results, wash less frequently to maintain the original wash.`,
        faq:[
            {
                idQuest:13 ,
                question: "How skinny are these compared to other skinny jeans?",
                answer: "These are a true skinny fit - they follow the natural contour of your leg from hip to ankle with a narrow 6-inch leg opening (in size 32). They're fitted but not restrictive thanks to the stretch fabric. If you prefer an extra-tight fit, you can size down."
            },
            {
                idQuest: 14,
                question: "Will the dark color bleed onto my shoes or other clothes?",
                answer: "Like all dark denim, some initial color transfer is possible with the first few wears. We recommend washing separately for the first 2-3 washes to remove excess dye. After that, the color will set and bleeding will stop."
            },
            {
                idQuest: 15,
                question: "How much stretch do they have? Will they bag out at the knees?",
                answer: "The 2% elastane provides excellent 4-way stretch for comfort and movement. Unlike some stretch denim, these are constructed to maintain their shape - they'll bounce back after wearing and won't develop baggy knees throughout the day."
            },
        ]
    },
    {
        id: 6,
        titleImg: "/image/Checkered Shirt.png",
        name: "Checkered Shirt",
        rating: 4.5,
        price: 180,
        oldPrice: null,
        discount: null,
        images:["/image/Checkered Shirt.png"],
        description:"A timeless checkered shirt that blends classic styling with modern comfort. Perfect for layering or wearing on its own, this versatile piece adds a touch of casual sophistication to any outfit.",
        colors:["Red/Black", "Blue/red", "Black/White", "Brown/Orange"],
        sizes: ["Small", "Medium","Large", "X-Large"],
        dressStyle: 'Casual',
        type: 'Shirt',
        productDetails: `Fabric & Material: Crafted from 100% soft-touch cotton flannel (fabric weight: 5.5 oz). The fabric is brushed on both sides for an extra-soft, cozy feel that's perfect for cooler weather while remaining breathable enough for year-round wear.

Design & Pattern: Features a classic grid check pattern with perfectly aligned color blocks. The pattern is yarn-dyed (not printed), meaning the colors penetrate the fibers completely for long-lasting vibrancy that won't fade after washing.

Construction & Details:

- Classic button-down collar for a relaxed yet polished look
- Full-length button front with durable plastic buttons in coordinating colors
- Single chest pocket on the left side with button closure
- Adjustable button cuffs with two-position buttons
- Rounded hem with side splits for easy tucking or wearing untucked
- Box pleat with hanging loop at the back yoke
- Reinforced stitching at all stress points

Fit & Sizing: Regular fit — relaxed through the chest and body without being oversized. Designed for easy layering over t-shirts or under jackets. True to size with enough room for comfortable movement. Model is 6'0" (183 cm) and wears size Medium for a classic fit.

Care Instructions: Machine wash cold with like colors. Do not bleach. Tumble dry low and remove promptly to minimize wrinkling. Warm iron if needed. The yarn-dyed construction ensures colors stay vibrant wash after wash.`,
        faq:[
            {
                idQuest: 16 ,
                question: "Is this shirt true to size? Can I layer it?",
                answer: "Yes, it's true to size with a regular fit that's perfect for layering. You can comfortably wear a t-shirt or thin sweater underneath without feeling restricted. If you plan to wear it over thick hoodies, we recommend sizing up."
            },
            {
                idQuest: 17 ,
                question: "Is this flannel warm? What season is it best for?",
                answer: "The 5.5 oz brushed cotton flannel provides warmth without being bulky. It's ideal for fall and spring, and works great as a mid-layer in winter. The breathable cotton also makes it comfortable for cooler summer evenings."
            },
            {
                idQuest: 18,
                question: "Will the colors bleed or fade after washing?",
                answer: "The check pattern is yarn-dyed, meaning the fibers are colored before weaving. This results in colors that are significantly more resistant to fading and bleeding compared to printed patterns. Just wash with like colors for the first few washes."
            },
        ]
    },
    {
        id: 7,
        titleImg: "/image/Sleeve Striped T-shirt.png",
        name: "Sleeve Striped T-Shirt",
        rating: 4.5,
        price: 130,
        oldPrice: 160,
        discount: 30,
        images:["/image/Sleeve Striped T-shirt.png"],
        description:"A modern take on the classic stripe tee featuring contrasting striped sleeves. This eye-catching design adds visual interest while maintaining the effortless comfort of your favorite t-shirt.",
        colors:["Orange/Black Stripes", "Black/Red Stripes", "Grey/Black Stripes", "Olive/Cream Stripes"],
        sizes: ["Small", "Medium","Large", "X-Large"],
        dressStyle: 'Casual',
        type: 'T-shirt',
        productDetails: `Fabric & Material: Body made from 100% combed ring-spun cotton (fabric weight: 4.5 oz) for ultimate softness and breathability. Sleeves feature a cotton-polyester blend (60% cotton, 40% polyester) to maintain the integrity of the stripe pattern and color vibrancy.

Design & Pattern: Features a bold color-block design with solid body and contrasting striped sleeves. The stripes are knit into the fabric (not printed) using a raglan sleeve construction that creates a seamless transition from shoulder to cuff for a retro-inspired athletic look.

Construction & Details:

- Classic crewneck collar with ribbed knit for shape retention
- Raglan sleeve construction for improved range of motion
- Contrast stripes on both sleeves with perfectly matched pattern at seams
- Double-needle stitching at hem and sleeves for durability
- Shoulder-to-shoulder taping for comfort and structure
- Pre-shrunk fabric to maintain fit after washing
- Subtle brand tag on lower left hem

Fit & Sizing: Modern regular fit — not too slim, not too loose. Designed to hit at the hip for a versatile silhouette that works for all body types. True to size with a relaxed feel. Model is 6'1" (185 cm) and wears size Medium for a classic look.

Care Instructions: Machine wash cold inside out with like colors. Do not bleach. Tumble dry low or hang dry. Warm iron if needed, avoiding direct heat on the stripe transition if possible. The contrast colors are set to resist bleeding.`,
        faq:[
            {
                idQuest: 19 ,
                question: "Are the stripes printed or knitted into the fabric?",
                answer: "The stripes are knitted into the fabric, not printed. This means they're part of the actual construction of the sleeve material and won't crack, peel, or fade over time. The colors will stay vibrant wash after wash."
            },
            {
                idQuest:20 ,
                question: "What's the fit like? Is it true to size?",
                answer: "The Sleeve Striped T-Shirt has a modern regular fit — comfortably relaxed without being baggy. We recommend sticking to your usual size. If you prefer a more fitted look, you can size down, as the cotton has a natural drape."
            },
            {
                idQuest:21 ,
                question: "Will the white parts become see-through?",
                answer: "No. Even in lighter color combinations, the 4.5 oz fabric weight provides adequate opacity. The cotton is high-quality and tightly woven to prevent sheerness while remaining breathable."
            },
        ]
    },
    {
        id: 8,
        titleImg: "/image/Vertical Striped Shirrt.png",
        name: "Vertical Striped Shirt",
        rating: 5.0,
        price: 212,
        oldPrice: 232,
        discount: 20,
        images:["/image/Vertical Striped Shirrt.png"],
        description:"A sophisticated button-down shirt featuring subtle vertical stripes that create a lengthening, slimming effect. Perfect for the modern professional who refuses to compromise on style or comfort.",
        colors:["Blue/White", "Pink/White", "Black/Grey", "Green/Black"],
        sizes: ["Small", "Medium","Large", "X-Large"],
        dressStyle: 'Formal',
        type: 'Shirt',
        productDetails: `Fabric & Material: Premium 100% long-staple cotton poplin (fabric weight: 4.2 oz). The poplin weave creates a smooth, crisp finish that resists wrinkling while remaining breathable and comfortable for all-day wear. Long-staple fibers ensure superior softness and durability.

Design & Pattern: Features fine vertical pinstripes spaced 0.5 inches apart for a classic, professional aesthetic. The stripes are woven into the fabric (not printed) using a yarn-dyed technique that ensures pattern integrity and colorfastness throughout the life of the garment.

Construction & Details:

- Classic spread collar that accommodates ties comfortably
- Full-length button front with high-quality mother-of-pearl buttons
- French front (hidden placket) for a clean, seamless appearance
- Adjustable single-button cuffs with cuff guard stitching
- Back box pleat with locker loop for ease of movement
- Rounded shirt-tail hem (longer in back for easy tucking)
- Removable collar stays to maintain collar shape
- Split back yoke for improved fit and mobility

Fit & Sizing: Tailored slim fit — cut closer to the body through the chest and waist for a modern, professional silhouette without being restrictive. True to size with enough room for comfort. Model is 6'1" (185 cm) and wears size Medium for a tailored look.

Care Instructions: Machine wash cold with like colors. Do not bleach. Tumble dry low and remove promptly to minimize wrinkles. For best results, hang dry and use a warm iron while slightly damp. The poplin fabric responds well to pressing for a crisp finish.`,
        faq:[
            {
                idQuest: 22 ,
                question: "Is this shirt suitable for job interviews and formal events?",
                answer: "Absolutely. The vertical pinstripe pattern is a classic choice for interviews, business meetings, and formal occasions. Pair it with a solid tie and tailored suit for a polished, professional appearance that commands respect."
            },
            {
                idQuest: 23,
                question: "Do vertical stripes really have a slimming effect?",
                answer: "Yes! Vertical stripes create an optical illusion that draws the eye up and down rather than side to side, which can create a lengthening, slimming effect. This makes the shirt particularly flattering for all body types."
            },
            {
                idQuest:24 ,
                question: "How does the fabric hold up to ironing? Is it wrinkle-resistant?",
                answer: "The cotton poplin fabric is naturally wrinkle-resistant compared to other weaves. It presses beautifully with a warm iron and holds its crispness throughout the day. For best results, iron while slightly damp."
            },
        ]
    },
    {
        id: 9,
        titleImg: "/image/COURAGE GRAPHIC T-SHIRT.png",
        name: "Courage Graphic T-Shirt",
        rating: 4.0,
        price: 145,
        oldPrice: null,
        discount: null,
        images:["/image/COURAGE GRAPHIC T-SHIRT.png"],
        description:"A bold statement tee featuring an inspiring 'Courage' graphic design. Made from premium cotton for maximum comfort and impact, this shirt lets you wear your values with pride.",
        colors:["Orange", "White", "Navy"],
        sizes: ["Small", "Medium","Large", "X-Large"],
        dressStyle: 'Casual',
        type: 'T-shirt',
        productDetails: `Fabric & Material: Premium 100% combed ring-spun cotton (fabric weight: 4.8 oz). The fabric is pre-shrunk to maintain shape and features a soft, garment-washed feel that's comfortable from the very first wear. Heathered options contain a touch of polyester for color variation.

Design & Print: Features a striking "COURAGE" typography design with distressed texture for a vintage aesthetic. The graphic is screen-printed using high-density, eco-friendly water-based inks that are soft to the touch and free from harmful chemicals. The print is designed to crack slightly over time for an authentic vintage look.

Construction & Details:

- Classic crewneck collar with ribbed knit and spandex for shape retention
- Shoulder-to-shoulder taping for comfort and durability
- Double-needle stitching at sleeves and bottom hem
- Side-seamed construction prevents twisting
- Tear-away label for tagless comfort
- Screen-printed back neck label with brand logo
- Pre-washed to minimize shrinkage

Fit & Sizing: Modern classic fit — relaxed through the body with a comfortable, wearable silhouette that flatters all body types. True to size with a slightly shorter length than fashion tees for a balanced look. Model is 6'0" (183 cm) and wears size Medium for a classic fit.

Care Instructions: Machine wash cold inside out with like colors. Do not bleach. Tumble dry low or hang dry. Do not iron directly on the graphic. The water-based inks are designed to age gracefully, developing a soft, worn-in character over time.`,
        faq:[
            {
                idQuest:25 ,
                question: "Will the graphic crack or peel after washing?",
                answer: "The water-based inks we use are designed to age beautifully. They may develop a slight, intentional crackle over time that adds to the vintage aesthetic, but they won't peel or flake off like cheaper plastisol prints. For best results, wash inside out in cold water."
            },
            {
                idQuest:26 ,
                question: "Is the fabric soft? Does it feel worn-in?",
                answer: "Yes! The fabric is garment-washed during production, which softens the fibers and gives it that comfortable, broken-in feel right out of the package. No stiffness or break-in period required."
            },
            {
                idQuest:27 ,
                question: "What's the meaning behind the Courage design?",
                answer: "The 'Courage' graphic is designed to inspire and empower. It's a reminder to face challenges head-on and embrace vulnerability as strength. The distressed typography style reflects that courage isn't about perfection—it's about showing up, even when things get rough."
            },
        ]
    },
    {
        id: 10,
        titleImg: "/image/Loose Fit Bermuda Shorts.png",
        name: "Loose Fit Bermuda Shorts",
        rating: 3.0,
        price: 80,
        oldPrice: null,
        discount: null,
        images:["/image/Loose Fit Bermuda Shorts.png"],
        description:"Classic Bermuda shorts with a relaxed, loose fit that hits just above the knee. Perfect for warm weather days when you want both style and unrestricted movement.",
        colors:["Blue", "Black", "Olive Green"],
        sizes: ["Small", "Medium","Large", "X-Large"],
        dressStyle: 'Casual',
        type: 'Shorts',
        productDetails: `Fabric & Material: Crafted from 98% cotton and 2% elastane twill (fabric weight: 7.5 oz). The cotton twill provides durability and structure, while the touch of elastane adds subtle stretch for enhanced comfort during movement.

Design & Features: Classic Bermuda length shorts with a relaxed fit through the leg. Features a flat front design with clean lines for a polished casual look. The length hits just above the knee (approximately 21-inch inseam, varies by size) for a timeless silhouette.

Construction & Details:

- Zip fly with button closure at waistband
- Classic five-pocket construction (two front, two back, coin pocket)
- Belt loops accommodate belts up to 1.75 inches
- Reinforced stitching at stress points for durability
- Permanent crease down front and back legs for a crisp look
- Vented side hem for ease of movement
- Signature brand label above back pocket
- Pre-washed to minimize shrinkage

Fit & Sizing: True loose fit through the seat and thigh with a straight leg opening. Designed for comfort without being baggy. Sits at the natural waist. Inseam is approximately 9.5 inches (24 cm) for all sizes. Model is 6'0" (183 cm) and wears size 32 for a classic Bermuda look.

Care Instructions: Machine wash cold with like colors. Do not bleach. Tumble dry low or hang to dry. Warm iron if needed to maintain the crease. The twill fabric becomes softer and more comfortable with each wash while maintaining its structure.`,
        faq:[
            {
                idQuest: 28 ,
                question: "How long are these shorts? Where do they hit on the leg?",
                answer: "These are classic Bermuda shorts with an approximate 9.5-inch inseam, designed to hit just above the knee. This length is universally flattering and appropriate for a wide range of casual settings, from weekend outings to casual Fridays."
            },
            {
                idQuest:29 ,
                question: "Are these appropriate for a casual office environment?",
                answer: "Yes, absolutely. The tailored twill fabric, flat front design, and permanent crease give these shorts a polished appearance that works well for casual and some business casual environments. Pair them with a polo or button-down shirt for a put-together look."
            },
            {
                idQuest:30 ,
                question: "How much stretch do they have? Will they restrict movement?",
                answer: "The 2% elastane provides just enough stretch for comfort without compromising the structure of the twill fabric. You'll have full range of motion for walking, sitting, and daily activities without feeling restricted."
            },
        ]
    },
    {
        id: 11,
        titleImg: "/image/Gradient Graphic T-shirt.png",
        name: "Gradient Graphic T-shirt",
        rating: 3.5,
        price: 145,
        oldPrice: null,
        discount: null,
        images:["/image/Gradient Graphic T-shirt.png"],
        description:"An artistic statement piece featuring a stunning gradient print that transitions smoothly from one color to another. This t-shirt combines streetwear aesthetics with premium comfort for a truly unique look.",
        colors:["White", "Black", "Green"],
        sizes: ["Small", "Medium","Large", "X-Large"],
        dressStyle: 'Party',
        type: 'T-shirt',
        productDetails: `Fabric & Material: Premium 100% combed ring-spun cotton (fabric weight: 4.5 oz). The fabric is pre-shrunk and garment-washed for a soft, lived-in feel right out of the package. Lightweight yet opaque enough for confident wear.

Design & Print: Features a seamless ombré gradient print created using advanced dye-sublimation technology. Unlike traditional screen printing, the gradient is infused directly into the fabric fibers, resulting in a print that is completely fade-proof, crack-proof, and incredibly soft to the touch with zero hand-feel.

Construction & Details:

- Classic crewneck collar with ribbed knit and Lycra® for shape retention
- Shoulder-to-shoulder twill tape for comfort and durability
- Double-needle stitching at sleeves and bottom hem
- Side-seamed construction prevents twisting
- Tear-away label for tagless comfort
- Matching or contrasting hem stitch detail (varies by colorway)
- Pre-washed to minimize shrinkage

Fit & Sizing: Modern regular fit — comfortable through the body with a slightly tailored silhouette that flatters without being too tight. True to size with a standard length that hits at the hip. Model is 6'1" (185 cm) and wears size Medium for a classic look.

Care Instructions: Machine wash cold inside out with like colors. Do not bleach. Tumble dry low or hang dry for best results. The dye-sublimation process ensures the gradient will remain vibrant wash after wash without fading or bleeding.`,
        faq:[
            {
                idQuest:31 ,
                question: "How is the gradient print applied? Will it fade or crack?",
                answer: "We use advanced dye-sublimation technology, which infuses the dye directly into the fabric fibers at the molecular level. This means the gradient is permanently part of the fabric — it won't crack, peel, or fade like traditional screen prints. The colors will stay vibrant for the life of the shirt."
            },
            {
                idQuest: 32,
                question: "Can I feel the print on the fabric? Is it stiff?",
                answer: "No, that's the beauty of dye-sublimation! Since the dye becomes part of the fabric rather than sitting on top of it, there's absolutely no hand-feel or stiffness. The shirt remains as soft as the untreated fabric — you won't even know there's a print there."
            },
            {
                idQuest: 33,
                question: "Are these suitable for festivals and parties?",
                answer: "Absolutely! The eye-catching gradient design makes these shirts perfect for music festivals, parties, and any event where you want to stand out. The breathable cotton keeps you comfortable while dancing and celebrating."
            },
        ]
    },
    {
        id: 12,
        titleImg: "/image/Polo_with_Contrast_Trims.png",
        name: "Polo with Tipping Details",
        rating: 4.5,
        price: 180,
        oldPrice: null,
        discount: null,
        images:["/image/Polo_with_Contrast_Trims.png"],
        description:"A refined polo shirt featuring delicate tipping details on the collar and placket. This elevated essential bridges the gap between classic sophistication and everyday comfort.",
        colors:["Pink", "Black", "White"],
        sizes: ["Small", "Medium","Large", "X-Large"],
        dressStyle: 'Formal',
        type: 'T-shirt',
        productDetails: `Fabric & Material: Premium 100% Egyptian cotton pique (fabric weight: 5.8 oz). Egyptian cotton's extra-long fibers create a fabric that is exceptionally soft, durable, and resistant to pilling. The pique knit offers texture, breathability, and structure that holds its shape throughout the day.

Design & Trims: Features refined 1/8-inch tipping (contrast piping) along the edges of the collar and placket. This subtle detailing adds visual interest without being overpowering. The three-button placket features premium dyed-to-match mother-of-pearl buttons with reinforced buttonholes.

Construction & Details:

- Classic polo collar with flexible inner lining to prevent curling
- Contrast tipping detail on collar edge and placket
- 3-button placket with mother-of-pearl buttons
- Ribbed cuffs with coordinating tipping detail
- Side vents at hem with reinforced stitching
- Tennis tail design (slightly longer back hem) for staying tucked
- Split back yoke for improved mobility
- Embroidered tonal logo on left chest
- Taped neck seam for comfort against skin

Fit & Sizing: Tailored classic fit — slightly slimmer through the body than traditional polos but not aggressively slim. Designed to flatter without restricting movement. True to size with a polished silhouette. Model is 6'1" (185 cm) and wears size Medium for a refined look.

Care Instructions: Machine wash cold inside out with like colors. Do not bleach. Tumble dry low or lay flat to dry. Warm iron if needed, avoiding direct heat on the tipping details. The premium Egyptian cotton becomes softer with each wash while maintaining its structure.`,
        faq:[
            {
                idQuest: 34,
                question: "What exactly are 'tipping details'?",
                answer: "Tipping refers to the thin contrast piping or trim along the edges of the collar and placket. It's a classic detailing technique in luxury polo shirts that adds a subtle pop of color and visual interest without being flashy — perfect for those who appreciate refined style"
            },
            {
                idQuest: 35,
                question: "Is this appropriate for golf or other sports?",
                answer: "Absolutely! While polished enough for business casual settings, the breathable pique cotton and tailored fit make this an excellent choice for golf, tennis, and other country club activities. Many of our customers wear it both on and off the course."
            },
            {
                idQuest:36 ,
                question: "How does Egyptian cotton differ from regular cotton?",
                answer: "Egyptian cotton features extra-long fibers that produce a finer, stronger yarn. This results in fabric that is noticeably softer, more durable, and less prone to pilling than standard cotton. It's a premium choice that improves with age."
            },
        ]
    },
    {
        id: 13,
        titleImg: "/image/Black Striped T-shirt.png",
        name: "Black Striped T-shirt",
        rating: 5.0,
        price: 120,
        oldPrice: 150,
        discount: 30,
        images:["/image/Black Striped T-shirt.png"],
        description:"A minimalist take on the classic striped tee featuring subtle black-on-black stripes. This understated design adds texture and depth to your outfit while maintaining a sleek, monochromatic aesthetic.",
        colors:["Black", "Orange", " Blue"],
        sizes: ["Small", "Medium","Large", "X-Large"],
        dressStyle: 'Casual',
        type: 'T-shirt',
        productDetails: `Fabric & Material: Premium 100% combed ring-spun cotton (fabric weight: 4.7 oz). The fabric features a garment-washed finish for exceptional softness and a lived-in feel from the first wear. Pre-shrunk to maintain size and shape wash after wash.

Design & Pattern: Features a unique black-on-black stripe pattern created using different fabric textures rather than color contrast. The stripes are knitted into the fabric using alternating jersey and textured weaves, creating a subtle visual and tactile stripe effect that's visible only upon closer inspection.

Construction & Details:

- Classic crewneck collar with ribbed knit and spandex for shape retention
- Shoulder-to-shoulder taping for comfort and durability
- Double-needle stitching at sleeves and bottom hem
- Side-seamed construction prevents twisting
- Tear-away label for tagless comfort
- Subtle tonal stitching throughout
- Matte finish for a sophisticated, non-shiny appearance

Fit & Sizing: Modern slim fit — tailored closer to the body for a sleek, contemporary silhouette. Designed to layer easily under jackets or wear alone. True to size with a clean, elongated cut. Model is 6'0" (183 cm) and wears size Medium for a modern slim look.

Care Instructions: Machine wash cold inside out with like colors. Do not bleach. Tumble dry low or hang dry. Warm iron if needed. The textured stripe pattern becomes softer with each wash while maintaining its subtle dimensional quality.`,
        faq:[
            {
                idQuest: 37,
                question: "I can barely see the stripes in the photos. Are they visible in person?",
                answer: "Yes, the stripes are intentionally subtle. They're created using different knit textures rather than color contrast, so they catch the light differently and become more visible as you move. It's designed for those who appreciate understated details that reveal themselves up close."
            },
            {
                idQuest: 38,
                question: "Is this a true black, or does it fade to grey?",
                answer: "The base color is a deep, true black. We use high-quality reactive dyes that bond with the cotton fibers for long-lasting color. With proper care (washing inside out in cold water), the black will remain deep and rich without significant fading."
            },
            {
                idQuest: 39,
                question: "What's the difference between this and a regular striped t-shirt?",
                answer: "Unlike traditional striped tees that use contrasting colors, this shirt creates stripes through textural variation in the knit. The result is a sophisticated, monochromatic look that adds visual interest without the bold contrast of traditional stripes. It's subtle, modern, and incredibly versatile."
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
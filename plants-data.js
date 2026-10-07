// Comprehensive Botanical, Home Garden, Herb, Vegetable & Tree Knowledge Base
const PLANT_DATABASE = [
  {
    id: "money-plant",
    common: "Money Plant",
    regional: "Devil's Ivy, Golden Pothos, Feng Shui Luck Plant",
    scientific: "Epipremnum aureum",
    type: "homegarden",
    badge: "🏡 Home Garden Favorite",
    summary: "The iconic, heart-shaped indoor creeper believed to attract prosperity and positive energy. Grows effortlessly in either water bottles or potting soil.",
    benefits: [
      "NASA Clean Air Study proven: Removes airborne formaldehyde, xylene, and benzene.",
      "Thrives without soil: Can live years in pure water containers with periodic water changes.",
      "Symbolic of good luck, abundance, and positive vibes in Indian and East Asian homes.",
      "Incredibly hardy: Survives weeks of low light, forgetful watering, and AC environments."
    ],
    needs: [
      "Light: Bright indirect window light. Avoid direct scorching sun which bleaches leaves.",
      "Water: Soil: When top 2 inches dry out (weekly). In water vases: Change water every 7-10 days.",
      "Soil: Light, porous potting mix (50% soil, 30% cocopeat, 20% compost) with good drainage.",
      "Support: Add a moist moss/coir pole to encourage massive, lush leaves.",
      "Fertilizer: Monthly diluted seaweed extract or compost tea during warm months."
    ],
    warnings: [
      "Yellowing leaves: Usually caused by excess root moisture or poor pot drainage.",
      "Pale, non-variegated green leaves: Indicates the plant is in an overly dark spot.",
      "Do not place near hot AC exhaust or cold drafty window panes.",
      "Trim long leggy stems to promote a bushy, fuller canopy."
    ],
    dangers: [
      "⚠️ TOXIC TO PETS: Contains insoluble calcium oxalate crystals.",
      "Keep high or in hanging baskets away from curious cats, dogs, and toddlers.",
      "Sap may cause mild skin itching in sensitive individuals when pruning."
    ]
  },
  {
    id: "tulsi",
    common: "Tulsi (Holy Basil)",
    regional: "Krishna Tulsi, Rama Tulsi, Vana Tulsi, Sacred Herb",
    scientific: "Ocimum tenuiflorum / Ocimum sanctum",
    type: "herb",
    badge: "🌿 Sacred Medicinal Herb",
    summary: "Queen of Herbs in Ayurveda. Revered across Indian homes as both a sacred spiritual presence and an indispensable daily immunity booster.",
    benefits: [
      "Ayurvedic powerhouse: Rich in eugenol and adaptogens that combat cough, cold, stress, and viral infections.",
      "Air-purifying: Naturally produces ozone and releases oxygen up to 20 hours a day.",
      "Daily herbal brew: Fresh leaves boiled with ginger and black pepper make an invigorating healing tea.",
      "Natural insect repellant: Mild aromatic volatile oils deter mosquitoes and house flies."
    ],
    needs: [
      "Sunlight: 5-6 hours of direct morning sunlight is essential for rich oil concentration.",
      "Watering: Daily in warm summer, alternate days in winter. Never keep soil soggy or waterlogged.",
      "Soil: Well-aerated loam rich in organic vermicompost with excellent drainage.",
      "Pruning (Crucial): Regularly pinch off flowering tops (manjari) to stop early aging and promote branching.",
      "Feeding: Monthly spoonful of vermicompost or neem cake powder (Khad)."
    ],
    warnings: [
      "Winter shock: Tulsi drops leaves below 12°C. Move under a porch or indoor sunlit window.",
      "Black spots on leaves: Caused by overwatering or fungal dampness; spray diluted neem oil spray.",
      "Never let water stagnate in the base plate, as root rot sets in quickly.",
      "Do not harvest leaves on Ekadashi or after sunset according to traditional practices."
    ],
    dangers: [
      "Safe for home use and cooking in regular culinary quantities.",
      "Chewing leaves raw over long periods can affect dental enamel due to natural iron and mercury traces; swallow or brew in tea.",
      "Consult physician if pregnant or on blood-thinning anticoagulants before consuming high medicinal extracts."
    ]
  },
  {
    id: "jasmine",
    common: "Jasmine (Mogra)",
    regional: "Mogra, Gundu Malli, Arabian Jasmine, Chameli",
    scientific: "Jasminum sambac",
    type: "flowering",
    badge: "🌸 Fragrant Floral Queen",
    summary: "Renowned for its intoxicating night fragrance and pure white starry blossoms. An essential floral treasure for balconies, gardens, and festive garlands.",
    benefits: [
      "Divine natural scent: Soothes nervous tension, alleviates stress, and promotes restorative sleep.",
      "Cultural reverence: Used in hair adornments (gajras), temple offerings, and aromatic green teas.",
      "Attracts gentle pollinators, honeybees, and night-flying moths.",
      "Vigorous climber/shrub that thrives in tropical container gardening."
    ],
    needs: [
      "Sunlight: Minimum 5 to 7 hours of direct sunlight is necessary to trigger heavy flowering.",
      "Watering: Moderate. Keep the soil evenly moist; reduce watering when flower buds form.",
      "Pruning: Hard prune in late winter/early spring. Prune tips after each bloom cycle to spur new buds.",
      "Soil: Rich, fertile garden soil mixed with well-rotted cow dung manure or leaf mold.",
      "Feeding: Mustard cake liquid (Sarson khali) or bone meal once every 15 days during flowering season."
    ],
    warnings: [
      "No flowers? Nine times out of ten, it needs more direct sun or a hard pinch/prune.",
      "Bud drop: Sudden shifts in temperature or fluctuating wet/dry soil shocks buds.",
      "Watch for aphids and mealybugs nestled under young flower stems; rinse with soap spray."
    ],
    dangers: [
      "Generally non-toxic to humans and common pets.",
      "True Jasmine (Jasminum sambac) is safe; do not confuse with toxic 'Carolina Jasmine' (Gelsemium)."
    ]
  },
  {
    id: "henna",
    common: "Henna (Mehndi)",
    regional: "Maruthani, Gorintaku, Mehendi, Egyptian Privet",
    scientific: "Lawsonia inermis",
    type: "homegarden",
    badge: "🪴 Traditional Beauty & Herb",
    summary: "Ancient shrub celebrated for its natural cooling lawsone dye used for traditional hair conditioning, celebratory body art, and Ayurvedic skin therapies.",
    benefits: [
      "Natural hair conditioner: Strengthens hair roots, repairs split ends, and cools the scalp.",
      "Natural antiseptic: Ground leaf paste provides soothing relief for minor burns, boils, and cracked heels.",
      "Extremely drought tolerant: Can thrive in blistering summer heat once established.",
      "Produces small, subtly sweet-scented creamy blossoms."
    ],
    needs: [
      "Sunlight: Loves intense heat and full sun (6-8 hours daily).",
      "Watering: Very low water requirement. Water only when top 2-3 inches feel dry to touch.",
      "Soil: Tolerant of poor, rocky, and sandy soils; requires great drainage.",
      "Pruning: Prune vigorously twice a year to harvest fresh leaves and stimulate lush new branch growth.",
      "Propagation: Easily grown from semi-hardwood cuttings or mature seeds."
    ],
    warnings: [
      "Will drop leaves and enter dormancy during freezing winter spells.",
      "Overwatering is the primary cause of yellowing, limp stems and root decay.",
      "Ensure container has large drainage holes."
    ],
    dangers: [
      "Pure fresh plant leaves are naturally safe.",
      "Warning: Commercial chemical black henna contains synthetic PPD which causes severe contact dermatitis. Stick to pure leaf paste.",
      "Individuals with G6PD deficiency should avoid using henna."
    ]
  },
  {
    id: "oma-valli",
    common: "Oma Valli / Karpooravalli",
    regional: "Mexican Mint, Indian Borage, Doddapatre, Ajwain Leaf, Panikoorka",
    scientific: "Coleus amboinicus / Plectranthus amboinicus",
    type: "herb",
    badge: "🌿 Medicinal First-Aid Plant",
    summary: "Succulent aromatic herb featuring thick, velvety leaves packed with thymol aroma. The go-to instant home remedy for infant colds, chest congestion, and digestion.",
    benefits: [
      "Pediatric cold remedy: Mildly warmed leaf juice extracted with honey eases phlegm and stubborn coughs.",
      "Culinary delight: Leaves are dipped in gram flour batter to make crispy, digestion-friendly 'Bajjis/Pakoras'.",
      "Immunity Rasam: Fresh crushed leaves boiled into herbal soup settle acidity and bloating.",
      "Zero-effort propagation: Simply snap a 3-inch cutting, push into soil, and it roots within 48 hours."
    ],
    needs: [
      "Sunlight: Bright indirect light or mild morning sun (too much scorching midday sun bleaches leaves).",
      "Watering: Succulent nature! Store water in thick leaves. Water sparingly once or twice a week.",
      "Soil: Porous, fast-draining cactus/garden mix with sand.",
      "Pot size: Wide shallow planters allow it to spread into a dense, fragrant green carpet."
    ],
    warnings: [
      "Soggy soil causes rapid stem collapse and rot. If stems turn translucent, stop watering immediately.",
      "Fragile stems snap easily during heavy winds; protect on high apartment balconies."
    ],
    dangers: [
      "✅ Very safe for humans and used widely in everyday culinary traditions.",
      "Due to strong essential oils and thymol, toxic to dogs and cats if chewed in large amounts."
    ]
  },
  {
    id: "rose",
    common: "Rose (Gulab)",
    regional: "Desi Gulab, Paneer Rose, Edward Rose, Damask Rose",
    scientific: "Rosa damascena / Rosa indica",
    type: "flowering",
    badge: "🌹 Classic Garden Favorite",
    summary: "The undisputed emperor of garden flora. Desi varieties offer unmatched sweet fragrance, cooling rosewater extracts, and culinary gulkand.",
    benefits: [
      "Medicinal rosewater & Gulkand: Rich in cooling antioxidants, digestive enzymes, and skin toners.",
      "Continual seasonal blooms when properly pruned and nurtured.",
      "Rose hip seed pods are loaded with concentrated natural Vitamin C.",
      "Enhances home aesthetics, floral bouquets, and rooftop terrace ambiance."
    ],
    needs: [
      "Sunlight: At least 6 hours of unhindered direct sun is mandatory for vigorous bud set.",
      "Watering: Deep watering early morning 2-3 times a week. Avoid splashing water onto foliage at dusk.",
      "Soil: Slightly acidic (pH 6.0-6.8), nutrient-packed garden loam with cow dung compost.",
      "Pruning: Cut back dry wood and blind shoots at a 45-degree angle 1/4 inch above an outward-facing eye.",
      "Feeding: Heavy feeder! Monthly dose of bone meal, composted manure, and diluted Epsom salt (magnesium sulfate)."
    ],
    warnings: [
      "Susceptible to powdery mildew, black spots, and spider mites in humid still air.",
      "Ensure good air circulation around the bush.",
      "Deadhead spent blooms immediately to redirect energy into forming new flower stems."
    ],
    dangers: [
      "Sharp thorns require protective garden gloves during pruning and harvesting.",
      "Petals are non-toxic, but avoid eating nursery-bought plants recently treated with synthetic pesticides."
    ]
  },
  {
    id: "bitter-gourd",
    common: "Bitter Gourd",
    regional: "Karela, Pavakkai, Kakarakaya, Balsam Apple",
    scientific: "Momordica charantia",
    type: "vegetable",
    badge: "🥒 Backyard Vegetable Vine",
    summary: "Vigorous climbing vine producing textured, deeply bitter medicinal gourds celebrated for blood sugar regulation and vital gut health.",
    benefits: [
      "Diabetes management: Contains polypeptide-p, charantin, and vicine that naturally support healthy insulin response.",
      "Rich in iron, vitamin C, folate, and dietary fiber.",
      "Easy vertical gardening: Fast growing climber suitable for small terrace trellises and balcony netting.",
      "Decorative yellow flowers that attract beneficial garden pollinators."
    ],
    needs: [
      "Sunlight: 6+ hours of full, hot direct sunlight.",
      "Trellis Support: Sturdy bamboo stakes, wire mesh, or nylon trellis netting is mandatory.",
      "Watering: Consistent daily watering to keep soil moist, especially during fruiting.",
      "Soil: Deep, well-draining sandy loam enriched with kitchen waste compost.",
      "Pollination: Has separate male and female flowers. Hand-pollinate with a soft brush if balcony lacks bees."
    ],
    warnings: [
      "Fruit flies (Bactrocera) lay eggs in young gourds causing rot; protect with breathable paper bags.",
      "Yellowing leaves from base up: Check for spider mites under leaf surfaces.",
      "Harvest gourds when crisp green; do not let them turn bright orange/yellow on the vine."
    ],
    dangers: [
      "Consuming extreme quantities of raw bitter gourd juice can trigger abdominal cramps or hypoglycemia.",
      "Seeds inside mature over-ripe gourds contain red arils that can induce mild vomiting in young children and pets."
    ]
  },
  {
    id: "tomato",
    common: "Tomato",
    regional: "Tamatar, Thakkali, Cherry Tomato, Country Tomato",
    scientific: "Solanum lycopersicum",
    type: "vegetable",
    badge: "🍅 High-Yield Kitchen Crop",
    summary: "The ultimate home gardener staple. Rewarding to grow in 12-inch pots with juicy sweet-tart fruits and fragrant foliage.",
    benefits: [
      "Abundant in Lycopene: Powerful antioxidant proven to bolster heart and cellular health.",
      "High home yield: A single well-cared potted bush can produce dozens of fresh kitchen tomatoes.",
      "Rich in Vitamins A, C, K, and Potassium.",
      "Available in sweet cherry and robust heritage varieties."
    ],
    needs: [
      "Sunlight: Minimum 6 to 8 hours of intense direct sunshine daily.",
      "Watering: Deep and consistent watering at soil level. Irregular watering leads to blossom end rot and split skins.",
      "Support: Stake or cage stems early; tomato branches become heavy and snap under fruit weight.",
      "Soil: Loose, fertile potting soil enriched with calcium (crushed eggshells or garden lime).",
      "Pruning: Pinch off 'suckers' (shoots emerging in the 45° crotch between branch and main stem) for bigger fruit."
    ],
    warnings: [
      "Blossom End Rot (black bottom of tomato): Caused by calcium deficiency triggered by uneven watering.",
      "Never water leaves from above to prevent early blight and fungal leaf spot.",
      "Keep an eye out for tomato hornworms or leaf miners."
    ],
    dangers: [
      "Ripe fruits are delicious and non-toxic.",
      "⚠️ GREEN PARTS (Leaves, stems, unripe fruit) contain solanine and tomatine, which are toxic to dogs, cats, and humans in large amounts."
    ]
  },
  {
    id: "betel-leaf",
    common: "Betel Leaf",
    regional: "Paan, Vetrillai, Tamalapaku, Vettila, Nagavalli",
    scientific: "Piper betle",
    type: "herb",
    badge: "🍃 Ancient Ayurvedic Climber",
    summary: "Glossy, heart-shaped aromatic climber steeped in thousands of years of Asian culture, post-meal digestive rituals, and traditional healing.",
    benefits: [
      "Digestive catalyst: Stimulates salivary amylase and digestive enzymes when chewed after heavy meals.",
      "Antimicrobial & antiseptic: Warmed leaves coated with castor oil relieve chest congestion and flatulence in babies.",
      "Beautiful ornamental climber: Lush evergreen heart-shaped foliage creates a stunning green living wall.",
      "Traditional reverence: Central auspicious offering in weddings, temple rites, and welcoming guests."
    ],
    needs: [
      "Sunlight: Partial shade and dappled light. Scorched and turns yellow in harsh direct afternoon sun.",
      "Watering: Prefers moderate, consistent moisture; never let the root ball completely dry out.",
      "Humidity: Loves high tropical humidity (60%+). Mist leaves daily in dry seasons.",
      "Support: Wooden stakes, coir pole, or rough brick wall where adventitious roots can cling.",
      "Soil: Rich, moist, organic-heavy soil with compost and coir peat."
    ],
    warnings: [
      "Very sensitive to winter frost and dry cold winds. Protect indoors or under green shade nets.",
      "Ensure proper drainage; waterlogging causes black root rot within a few days.",
      "Harvest lower mature leaves regularly to encourage rapid branch tip growth."
    ],
    dangers: [
      "Pure betel leaf is medicinal and safe.",
      "Note: Do not confuse traditional chewing of pure betel leaves with commercial 'gutkha/areca nut' mixtures, which carry oral health risks.",
      "Mildly toxic to pets if consumed in excessive quantities."
    ]
  },
  {
    id: "curry-leaf",
    common: "Curry Leaf Tree",
    regional: "Kariveppilai, Kadi Patta, Meetha Neem, Karivepaaku",
    scientific: "Murraya koenigii",
    type: "homegarden",
    badge: "🥘 Daily Culinary Essential",
    summary: "The heartbeat of South Indian and Asian tempering (tadka). Aromatic, medicinal foliage packed with iron, beta-carotene, and essential oils.",
    benefits: [
      "Culinary magic: Releases signature nutty aroma when tempered in hot oil or ghee.",
      "Hair health: Rich in antioxidants and amino acids; boiled in coconut oil, it is a renowned natural tonic against premature graying.",
      "Blood sugar & cholesterol helper: Daily chewing of fresh raw leaves supports glycemic balance.",
      "Hardy perennial: Once established, thrives for decades in containers or backyards."
    ],
    needs: [
      "Sunlight: Full sun (6+ hours). Loves warm, tropical weather.",
      "Watering: Deeply water when topsoil feels dry. Dislikes wet feet.",
      "Secret Tonic: Sour buttermilk (diluted 1:10 with water) poured once a fortnight does wonders for leaf growth.",
      "Soil: Porous red soil mixed with river sand and well-aged cow manure.",
      "Pruning: Prune tip branches twice a year; pruning forces multi-stem branching, doubling leaf production."
    ],
    warnings: [
      "Winter Dormancy: Sheds leaves when temperature drops below 15°C; do not overwater during this phase.",
      "Psyllid bugs and black scale: Wash leaves with mild neem soap emulsion.",
      "Always pluck whole leaf stalks (petiole), never individual leaflets."
    ],
    dangers: [
      "Leaves are safe, nutritious, and edible.",
      "Seeds inside the dark berries are poisonous and must not be consumed."
    ]
  },
  {
    id: "neem",
    common: "Neem Tree",
    regional: "Vepai, Margosa, Indian Lilac, Nimba",
    scientific: "Azadirachta indica",
    type: "tree",
    badge: "🌳 Nature's Living Pharmacy",
    summary: "Celebrated in ancient scriptures as the universal healer ('Sarva Roga Nivarini'). A natural air cleanser, organic pesticide, and potent antifungal shield.",
    benefits: [
      "Organic garden protector: Neem oil derived from seeds is the world's best non-toxic garden pest deterrent.",
      "Air purifier: Absorbs greenhouse gases and purifies surrounding home garden microclimates.",
      "Dental & skin hygiene: Twigs traditionally used as organic toothbrushes; leaves purify skin blemishes.",
      "Drought-resilient: Flourishes in intense heat, requires minimal irrigation once established."
    ],
    needs: [
      "Sunlight: Full blazing direct sunlight.",
      "Space: Plant outdoors with room to grow into a stately shade canopy, or prune heavily as a bonsai/large tub plant.",
      "Watering: Low to moderate. Tolerates prolonged dry spells effortlessly.",
      "Soil: Highly adaptable; thrives in sandy, stony, or clayey soils with adequate drainage."
    ],
    warnings: [
      "In container settings, it quickly outgrows pots; repot every 2 years into a larger barrel.",
      "Naturally sheds old leaves during late winter before a burst of fragrant white spring blooms."
    ],
    dangers: [
      "Neem leaves in moderation are used medicinally.",
      "⚠️ Pure concentrated neem seed oil is toxic if swallowed internally; keep away from children and pets.",
      "Avoid internal medicinal use during pregnancy."
    ]
  },
  {
    id: "aloe-vera",
    common: "Aloe Vera",
    regional: "Kattralai, Ghritkumari, Kalabanda, Medicine Plant",
    scientific: "Aloe barbadensis miller",
    type: "succulent",
    badge: "🌵 Soothing Succulent Healer",
    summary: "The ultimate skin-healing succulent. Fat, serrated leaves house pure therapeutic gel ideal for sunburns, cuts, hair hydration, and digestion.",
    benefits: [
      "First-aid skin soother: Cools burns, insect stings, and scrapes immediately upon leaf slicing.",
      "Zero-effort survival: Stores water reserves in gel leaves; handles weeks of neglect.",
      "Natural indoor air purifier: Removes benzene and clears indoor toxins, producing oxygen at night.",
      "Produces 'pups' (offshoots) allowing endless propagation for friends and neighbors."
    ],
    needs: [
      "Sunlight: Bright indirect light or 3-4 hours of gentle morning sun. Direct desert sun causes leaves to brown.",
      "Watering: The 'soak and dry' method: water thoroughly, then wait until soil is 100% dry (every 2-3 weeks).",
      "Soil: Gritty succulent/cactus soil mix with sand, perlite, or pumice.",
      "Drainage: Must have terracotta pot with generous drainage hole."
    ],
    warnings: [
      "Brown limp leaves: Almost always a symptom of overwatering and root rot.",
      "Yellow sap (aloin) seeps when cutting a leaf; let it drain away before applying clear gel to skin."
    ],
    dangers: [
      "Clear inner gel is safe for topical application.",
      "⚠️ Toxic to cats and dogs: Ingestion of latex or skin causes vomiting and lethargy."
    ]
  },
  {
    id: "hibiscus",
    common: "Hibiscus",
    regional: "Sembaruthi, Gudhal, Mandaram, Shoe Flower",
    scientific: "Hibiscus rosa-sinensis",
    type: "flowering",
    badge: "🌺 Vibrant Garden Showstopper",
    summary: "Magnificent tropical evergreen shrub bearing glorious red, pink, or yellow trumpet blooms beloved for hair oils, herbal teas, and prayer offerings.",
    benefits: [
      "Ancient hair conditioning: Crushed leaves and petals create a natural mucilaginous conditioning wash for silky black hair.",
      "Heart & blood pressure tea: Hibiscus flower petals make tart, antioxidant-rich ruby red tea.",
      "Attracts vibrant pollinators, sunbirds, and butterflies to your balcony.",
      "Perennial producer: Blooms almost continuously throughout warm months."
    ],
    needs: [
      "Sunlight: 5 to 7 hours of direct hot sunlight is required for nonstop budding.",
      "Watering: Regular watering; keep soil moist but never waterlogged.",
      "Soil: Rich, well-draining garden soil enriched with vermicompost and potassium.",
      "Feeding: High potassium fertilizer (wood ash or banana peel fertilizer) triggers massive blooms.",
      "Pruning: Pinch branch tips in late spring to encourage multi-branching."
    ],
    warnings: [
      "Bud drop: Occurs if plant dries out completely or when mealybugs infest the bud base.",
      "Common target for white cottony mealybugs; spray immediately with 5ml neem oil + 2ml liquid soap per liter of water."
    ],
    dangers: [
      "Generally non-toxic to humans and household pets.",
      "Safe for traditional tea and culinary garnishes."
    ]
  },
  {
    id: "snake-plant",
    common: "Snake Plant",
    regional: "Mother-in-Law's Tongue, Sansevieria",
    scientific: "Dracaena trifasciata (Sansevieria)",
    type: "houseplant",
    badge: "🏡 Indestructible Air Cleanser",
    summary: "Architectural vertical swords that thrive on absolute neglect while scrubbing airborne chemicals and releasing oxygen throughout the night.",
    benefits: [
      "Top NASA-tested air purifier: Removes formaldehyde, benzene, xylene, and trichloroethylene.",
      "Crassulacean Acid Metabolism (CAM): Releases oxygen at night, making it the ideal bedroom plant.",
      "Virtually unkillable: Survives dark hallway corners, low humidity, and weeks without water."
    ],
    needs: [
      "Light: Tolerates virtually everything from low corners to bright indirect light.",
      "Water: Water only once every 3-4 weeks. If in doubt, DO NOT water!",
      "Soil: Gritty, free-draining cactus mix.",
      "Pot: Heavy ceramic or terracotta pot to counter-balance tall upright leaves."
    ],
    warnings: [
      "The ONLY way to kill a snake plant is overwatering. Soft, wrinkly, yellow base means root rot.",
      "Never leave water standing in the leaf crown center."
    ],
    dangers: [
      "⚠️ Toxic to dogs and cats if chewed; causes nausea and gastrointestinal irritation."
    ]
  },
  {
    id: "monstera",
    common: "Monstera Deliciosa",
    regional: "Swiss Cheese Plant, Split-Leaf Philodendron",
    scientific: "Monstera deliciosa",
    type: "houseplant",
    badge: "🌿 Tropical Statement Centerpiece",
    summary: "Dramatic jungle climber with massive glossy leaves that develop iconic artistic splits and fenestrations as it matures.",
    benefits: [
      "Living interior art: Transforms any living room into an upscale tropical sanctuary.",
      "Natural humidity regulator: Boosts indoor moisture through gentle transpiration.",
      "Fast, rewarding grower: Thrives with a sturdy coir pole to climb."
    ],
    needs: [
      "Light: Bright, filtered indirect sunlight. Direct noon sun will scorch large leaves.",
      "Water: Water when the top 2 inches of soil feel dry (every 7-10 days).",
      "Humidity: Appreciates 55%+ humidity; wipe leaves clean with a damp cloth monthly.",
      "Support: Guide emerging aerial roots toward a moist moss pole."
    ],
    warnings: [
      "Leaves lack holes? Increase indirect light exposure; young plants produce solid leaves first.",
      "Brown crispy edges indicate low humidity or thirsty roots."
    ],
    dangers: [
      "⚠️ Toxic to pets and humans if chewed; contains calcium oxalate crystals causing mouth pain."
    ]
  },
  {
    id: "vetrilai",
    common: "Betel Leaf (Vetrilai / Paan)",
    regional: "Vetrilai (Tamil), Paan (Hindi), Tamalapaku (Telugu), Vethila (Malayalam), Veelyada Ele (Kannada)",
    scientific: "Piper betle",
    type: "herb",
    badge: "🌿 Sacred South Indian Climber",
    summary: "Traditional heart-shaped auspicious vine held in high esteem across South Indian culture and Ayurvedic digestion therapies.",
    benefits: [
      "Ayurvedic digestif: Chewed with areca nut and spices post-meal to stimulate saliva and digestive enzymes.",
      "Antibacterial & antifungal: Crushed leaf juice applied to cuts, fungal patches, and minor boils.",
      "Symbol of auspicious beginnings: Essential in traditional weddings, poojas, and welcome ceremonies."
    ],
    needs: [
      "Light: Filtered, gentle sunlight or semi-shade. Direct harsh noon sun burns leaves quickly.",
      "Water: Keep soil consistently damp with regular light watering, but avoid waterlogging.",
      "Support: Provide a coir moss stick, wooden trellis, or balcony railing for aerial rootlets.",
      "Soil: Rich, organic potting mix (40% red soil, 30% cocopeat, 30% vermicompost)."
    ],
    warnings: [
      "Yellowing wilted leaves: Root rot caused by poor pot drainage; drill extra drainage holes.",
      "Spider mite attack: Spray underside of leaves with mild neem water during hot dry seasons."
    ],
    dangers: [
      "Safe and edible for humans. Non-toxic to household pets in natural forms."
    ]
  },
  {
    id: "kariveppilai",
    common: "Curry Leaf (Kariveppilai / Kadi Patta)",
    regional: "Kariveppilai (Tamil), Kadi Patta (Hindi), Karivepaku (Telugu), Kariveppila (Malayalam), Karibevu (Kannada)",
    scientific: "Murraya koenigii",
    type: "homegarden",
    badge: "🏡 Kitchen Garden Staple",
    summary: "The irreplaceable soul of South Indian tempering. An aromatic leafy shrub loaded with iron, antioxidants, and beta-carotene.",
    benefits: [
      "Hair & scalp nourishment: Fresh leaves infused in hot virgin coconut oil promote thick, dark hair growth.",
      "Rich in iron and folic acid: Supports hemoglobin health and blood purification.",
      "Gastric comfort: Infused in spiced buttermilk (Neer Mor) to alleviate morning nausea and acidity."
    ],
    needs: [
      "Sunlight: Minimum 6 hours of blazing direct sunlight. Essential for rich aromatic oil.",
      "Water: Water deeply once topsoil feels slightly dry. Never leave standing water in saucers.",
      "Pruning: Pinch off top tender growth tip to force the plant into a bushy canopy.",
      "Remedy for yellowing leaves: Pour diluted fermented sour buttermilk around roots every fortnight."
    ],
    warnings: [
      "Pale chlorotic leaves: Iron/magnesium deficiency in alkaline pots; add Epsom salts or buttermilk.",
      "Caterpillar grazing: Common Mormon butterfly caterpillars love tender leaves; handpick them off."
    ],
    dangers: [
      "100% edible and safe for everyday consumption."
    ]
  },
  {
    id: "mudakathan",
    common: "Mudakathan (Balloon Vine)",
    regional: "Mudakathan Keerai (Tamil), Kanphata (Hindi), Buddakakara (Telugu), Uzhinja (Malayalam), Agniballi (Kannada)",
    scientific: "Cardiospermum halicacabum",
    type: "herb",
    badge: "🌿 Herbal Joint Care Vine",
    summary: "Fast-growing medicinal creeper with whimsical balloon-like seed pods, celebrated in South India for relieving joint pain and arthritis.",
    benefits: [
      "Natural joint mobility remedy: Famous in South Indian Mudakathan Dosai and Rasam for reducing joint inflammation.",
      "Anti-inflammatory flavonoids: Used in traditional village medicine to ease stiffness and rheumatic aches.",
      "Fast balcony climber: Covers trellises in vibrant emerald foliage within weeks."
    ],
    needs: [
      "Light: Thrives in bright sunshine to moderate balcony light.",
      "Water: Regular watering; keep soil slightly moist.",
      "Support: Needs thin string or wire mesh to latch its delicate curling tendrils."
    ],
    warnings: [
      "Sensitive to prolonged water stagnation.",
      "Harvest leaves while tender before flower pods mature for maximum taste and medicinal potency."
    ],
    dangers: [
      "Safe for culinary preparation when cooked into batters, chutneys, or broths."
    ]
  },
  {
    id: "pirandai",
    common: "Pirandai (Veldt Grape / Hadjod)",
    regional: "Pirandai (Tamil), Hadjod (Hindi), Nalleru (Telugu), Changalamparanda (Malayalam), Mangaravalli (Kannada)",
    scientific: "Cissus quadrangularis",
    type: "succulent",
    badge: "🌵 Ancient Bone Healer",
    summary: "A tough four-sided succulent vine with immense bone-strengthening power, heavily praised in Siddha and Ayurvedic medicine.",
    benefits: [
      "Accelerates bone fracture healing: Stimulates osteoblasts and enhances bone mineral uptake.",
      "Appetite & digestion stimulator: Prepared as tangy Pirandai Thuvaiyal to cure loss of appetite.",
      "Extreme drought resilience: Can survive weeks without water in balcony pots."
    ],
    needs: [
      "Light: Direct hot tropical sun (6+ hours).",
      "Water: Water very sparingly; let soil dry completely between watering (succulent habit).",
      "Soil: Gritty, sandy, well-draining soil with 30% coarse sand or perlite."
    ],
    warnings: [
      "Contains microscopic calcium oxalate crystals: **Always smear hands with sesame oil** before harvesting and peeling to avoid skin irritation.",
      "Tender green tips are best for cooking; discard tough fibrous woody sections."
    ],
    dangers: [
      "Must be sauteed thoroughly with tamarind/oil before eating to neutralize itchy oxalate crystals."
    ]
  }
];

// Export to window object for standalone HTML access
if (typeof window !== 'undefined') {
  window.PLANT_DATABASE = PLANT_DATABASE;
}

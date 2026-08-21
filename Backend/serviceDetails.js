const servicesData = {
    "full-engine": {
        name: "Full Engine Service",
        subtitle: "Complete inspection and maintenance for better engine performance and reliability.",
        category: "Maintenance",
        image: "images/full engine.jpg",
        price: "Rs. 10,000",
        deposit: "Rs. 2,000",
        estimatedTime: "2 Hours",
        serviceType: "Full Service",
        rating: "4.9 / 5",
        reviews: "(126 reviews)",
        description: [
            "Our Full Engine Service is designed to keep your vehicle's engine running smoothly and efficiently. Our trained technicians inspect the major engine components and perform essential maintenance.",
            "The service includes engine oil replacement, filter inspection, fluid level checks and a complete engine performance inspection."
        ],
        included: [
            { title: "Engine Inspection", desc: "Complete engine condition check" },
            { title: "Engine Oil Change", desc: "Replace old engine oil" },
            { title: "Filter Inspection", desc: "Check and replace filters if required" },
            { title: "Fluid Check", desc: "Check essential vehicle fluids" },
            { title: "Battery Check", desc: "Inspect battery condition" },
            { title: "Performance Check", desc: "Final engine performance inspection" }
        ]
    },
    "wheel-alignment": {
        name: "Wheel Alignment",
        subtitle: "Professional wheel alignment to improve handling, safety and tyre lifespan.",
        category: "Maintenance",
        image: "images/wheel.jpg",
        price: "Rs. 4,500",
        deposit: "Rs. 1,000",
        estimatedTime: "1 Hour",
        serviceType: "Precision Alignment",
        rating: "4.9 / 5",
        reviews: "(88 reviews)",
        description: [
            "Improper wheel alignment causes uneven tire wear and steering vibrations. Our computerized wheel alignment ensures all 4 wheels are parallel and sitting correctly on the road."
        ],
        included: [
            { title: "Computerized Alignment", desc: "3D laser sensor wheel alignment" },
            { title: "Wheel Balancing", desc: "Precision dynamic balancing for all wheels" },
            { title: "Tire Pressure Calibration", desc: "Adjust tire pressure to OEM specs" }
        ]
    },
    "ac-repair": {
        name: "AC Repair",
        subtitle: "Diagnose and repair vehicle air-conditioning systems for comfortable driving.",
        category: "Repair",
        image: "images/ac repair.jpg",
        price: "Rs. 5,000",
        deposit: "Rs. 1,000",
        estimatedTime: "1.5 Hours",
        serviceType: "Diagnostic & Repair",
        rating: "4.8 / 5",
        reviews: "(94 reviews)",
        description: [
            "Is your air conditioning blowing warm air or making strange noises? Our AC repair service restores your climate control system to optimal cooling performance.",
            "We test compressor pressure, check for refrigerant leaks, clean vents, and recharge refrigerant gas to ensure fresh, cool air inside your cabin."
        ],
        included: [
            { title: "Gas Leak Test", desc: "Full inspection for gas leaks in the system" },
            { title: "Refrigerant Refill", desc: "Top-up / refill AC cooling gas" },
            { title: "Cabin Filter Cleaning", desc: "Clean or replace cabin AC air filter" },
            { title: "Compressor Check", desc: "Test AC compressor performance & belt" }
        ]
    },
    "car-cleaning": {
        name: "Premium Car Cleaning",
        subtitle: "Interior and exterior cleaning to keep your vehicle looking fresh and clean.",
        category: "Cleaning",
        image: "images/clean.jpg",
        price: "Rs. 3,500",
        deposit: "Rs. 800",
        estimatedTime: "1 Hour",
        serviceType: "Full Detailing",
        rating: "4.7 / 5",
        reviews: "(152 reviews)",
        description: [
            "Give your vehicle the complete care it deserves with our eco-friendly foam wash, underbody degreasing, and deep interior vacuuming."
        ],
        included: [
            { title: "Snow Foam Wash", desc: "Scratch-free exterior high-pressure foam wash" },
            { title: "Underbody Wash", desc: "Removal of mud and dirt from chassis" },
            { title: "Interior Vacuuming", desc: "Deep cleaning of seats, carpets, and trunk" }
        ]
    }
};

const urlParams = new URLSearchParams(window.location.search);
const serviceKey = urlParams.get('service') || 'full-engine';
const data = servicesData[serviceKey] || servicesData['full-engine'];

document.getElementById('page-title').textContent = `${data.name} - AutoCare`;
document.getElementById('breadcrumb-title').textContent = data.name;
document.getElementById('service-name').textContent = data.name;
document.getElementById('service-subtitle').textContent = data.subtitle;
document.getElementById('service-img').src = data.image;
document.getElementById('service-badge').textContent = data.category;


document.getElementById('service-description').innerHTML = data.description.map(p => `<p>${p}</p>`).join('');


document.getElementById('included-container').innerHTML = data.included.map(item => `
    <div class="included-item">
        <span class="included-icon">✓</span>
        <div>
            <h3>${item.title}</h3>
            <p>${item.desc}</p>
        </div>
    </div>
`).join('');

document.getElementById('service-price').textContent = data.price;
document.getElementById('info-category').textContent = data.category;
document.getElementById('info-time').textContent = data.estimatedTime;
document.getElementById('info-type').textContent = data.serviceType;
document.getElementById('info-deposit').textContent = data.deposit;
document.getElementById('service-rating').textContent = data.rating;
document.getElementById('service-reviews').textContent = data.reviews;
document.getElementById('book-now-btn').href = `booking.html?service=${serviceKey}`;
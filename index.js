const propertyForSaleArr = [
    {
        propertyLocation: "Kensington, London",
        priceGBP: 890000,
        roomsM2: [14, 18, 14, 10, 6],
        comment: "Highly desirable location in stunning scenery!",
        image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
    },
    {
        propertyLocation: "Wirral, Liverpool",
        priceGBP: 650000,
        roomsM2: [18, 16, 15, 14, 17, 19, 9, 8],
        comment: "Astonishing view with a modern finish!",
        image: "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
    },
    {
        propertyLocation: "Beach House, Cornwall",
        priceGBP: 450000,
        roomsM2: [20, 15, 10],
        comment: "Steps away from the ocean.",
        image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
    }
]

const placeholderPropertyObj = {
    propertyLocation: "1 My Street, My Town",
    priceGBP: 0,
    roomsM2: [0],
    comment: "This is a placeholder property.",
    image: "https://via.placeholder.com/300x200"
}



// 1. Setup the function with a Default Parameter
function getPropertyHtml(arr = [placeholderPropertyObj]) {
    
    // 2. Use .map() to iterate over the array
    const propertyHtmlArr = arr.map(property => {
        
        // 3. CHALLENGE: Use .reduce() to sum the room sizes
        const totalSize = property.roomsM2.reduce((total, currentRoomSize) => {
            return total + currentRoomSize
        }, 0)
        
        // 4. Return the HTML string for this specific property
        return `
            <div class="card">
                <img src="${property.image}" alt="${property.propertyLocation}">
                <div class="info-container">
                    <h3>${property.propertyLocation}</h3>
                    <p class="price">£${property.priceGBP.toLocaleString()}</p>
                    <p class="size">Size: ${totalSize} m²</p>
                    <p class="comment">"${property.comment}"</p>
                </div>
            </div>
        `
    })

    // 5. Use .join("") to turn the array of strings into one big string
    return propertyHtmlArr.join("")
}

// 6. Call the function and inject into DOM
document.addEventListener("DOMContentLoaded", () => {
  document.getElementById('container').innerHTML = getPropertyHtml(propertyForSaleArr)
})

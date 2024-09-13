export const createAboutUs = () =>{
    const aboutUsDiv = document.createElement("div");
    const aboutHeader = document.createElement("h2");
    const aboutDesc = document.createElement("p");
    
    aboutHeader.textContent = "About us";
    aboutDesc.textContent = "Welcome to Bella Tavola, where every meal is a celebration of Italian tradition and family. Nestled in the heart of [City], our restaurant is a tribute to the rich culinary heritage of Italy. Our menu features classic dishes made from age-old recipes passed down through generations."
    aboutUsDiv.id = "about-us";

    aboutUsDiv.appendChild(aboutHeader);
    aboutUsDiv.appendChild(aboutDesc);

    return aboutUsDiv;
}
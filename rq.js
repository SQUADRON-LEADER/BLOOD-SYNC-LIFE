const services = {
    "home-services": [
      "Blood Donate",
      "Request for Blood",
      "Nearest Hospita",
      "Need Patient Bed",
      "One To One Doctor Talk",
      "OTHER"
      
    ],
    "auto-services": [
      "Blood Donate",
      "Request for Blood",
      "Nearest Hospita",
      "Need Patient Bed",
      "One To One Doctor Talk",
      "OTHER"
      
    ],
    "lawn-services": [
      "Blood Donate",
      "Request for Blood",
      "Nearest Hospita",
      "Need Patient Bed",
      "One To One Doctor Talk",
      "OTHER"
      
    ],
    "other-services": [
     "Blood Donate",
      "Request for Blood",
      "Nearest Hospita",
      "Need Patient Bed",
      "One To One Doctor Talk",
      "OTHER"
    ]
  };
  
  // Get the category and service name elements
  const categorySelect = document.getElementById("category");
  const serviceNameSelect = document.getElementById("serviceName");
  
  // Add event listener to category select
  categorySelect.addEventListener("change", updateServices);
  
  // Function to update services based on selected category
  function updateServices() {
    const selectedCategory = categorySelect.value;
    const servicesForCategory = services[selectedCategory];
  
    // Clear the service name select
    serviceNameSelect.innerHTML = "";
  
    // Add options to service name select
    servicesForCategory.forEach(service => {
      const option = document.createElement("option");
      option.value = service;
      option.textContent = service;
      serviceNameSelect.appendChild(option);
    });
  }
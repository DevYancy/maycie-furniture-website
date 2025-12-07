// ===================================
// Service Details Data
// ===================================
const serviceOrder = ['floor-plans', 'interior-elevations', 'perspectives', 'walkthroughs'];
let currentServiceIndex = 0;

const serviceData = {
    'floor-plans': {
        title: 'Floor Plans',
        description: 'A clarified layout wherein all furniture, decorations and other miscellaneous fixtures are properly arranged while also being proportional to the actual site itself.',
        pricing: [
            { label: 'Per Square Meter', price: '₱300 - ₱400' },
            { label: 'Note', price: 'May depend on land prices within the municipality or locality' }
        ],
        expectations: 'Within the floor plan lies the individual furniture detailed into a catalogue comprising of its dimensions, type of material, type of furniture and its theme. Clients may also request for revisions depending on its complexity.',
        inclusions: [
            'Floor plans',
            'Reflective Ceiling Plans',
            'Furniture Layout',
            'Power Layout',
            'Floor Material Plan',
            'Wall Material Plan'
        ],
        media: [
            { type: 'image', src: 'images/floor_plan/1.JPG' },
            { type: 'image', src: 'images/floor_plan/2.JPG' },
            { type: 'image', src: 'images/floor_plan/3.JPG' },
            { type: 'image', src: 'images/floor_plan/4.JPG' },
            { type: 'image', src: 'images/floor_plan/5.JPG' },
            { type: 'image', src: 'images/floor_plan/6.JPG' },
            { type: 'image', src: 'images/floor_plan/7.JPG' }
        ]
    },
    'interior-elevations': {
        title: 'Interior Elevations',
        description: 'Interior elevations can assist the visualization of a space via its various views (front, back, left and right) where the cabinetry, fixtures and other furniture can be seen according to the floor plan.',
        pricing: [
            { label: '4 Views', price: '10% of total floor plan price' },
            { label: 'Blow-up Plans', price: 'Additional cost depending on complexity' }
        ],
        expectations: 'The interior elevations can also envision how other materials, lighting and space come into one cohesive piece.',
        media: [
            { type: 'image', src: 'images/interior/2.png' },
            { type: 'image', src: 'images/interior/3.png' },
            { type: 'image', src: 'images/interior/4.png' },
            { type: 'image', src: 'images/interior/5.png' }
        ]
    },
    'perspectives': {
        title: '3D Perspectives',
        description: 'Perspectives can adhere the floor plan and interior elevation views into one three dimensional or 2 dimensional photo where the details may vary depending on its quality.',
        pricing: [
            { label: 'Full HD', price: '₱500' },
            { label: '4K Resolution', price: '₱1,500' },
            { label: '8K Resolution', price: '₱3,500' }
        ],
        expectations: 'The perspective views can highlight each detail without having the need to purchase the said object as the product will be on par with its actual.',
        leadtime: [
            { label: 'Full HD', time: '1 hour' },
            { label: '4K', time: '5-8 hours' },
            { label: '8K', time: '2 days' }
        ],
        media: [
            { type: 'image', src: 'images/exterior perspectives/higher HD_1 - Photo.jpg' },
            { type: 'image', src: 'images/exterior perspectives/higher HD_2 - Photo.jpg' },
            { type: 'image', src: 'images/exterior perspectives/higher HD_4 - Photo.jpg' },
            { type: 'image', src: 'images/exterior perspectives/render.jpg' },
            { type: 'image', src: 'images/exterior perspectives/Al Fresco.png' },
            { type: 'image', src: 'images/exterior perspectives/perp.png' }
        ]
    },
    'walkthroughs': {
        title: '3D Walkthroughs',
        description: 'A walkthrough, as the name implies, is a 3 dimensional motion picture/video that lets the client experience the interior without having to waste much materials and waiting for its actual construction.',
        pricing: [
            { label: 'HD', price: '₱850' },
            { label: 'Full HD', price: '₱1,500' },
            { label: 'Quad HD', price: '₱4,000' },
            { label: '4K', price: '₱7,000' }
        ],
        expectations: 'The walkthrough can be viewed in various angles while also maintaining its quality throughout each movement, whether it would be in the interior or exterior face of the household, the walkthrough can project it.',
        leadtime: [
            { label: 'HD', time: '3 hours' },
            { label: 'Full HD', time: '6 hours' },
            { label: 'Quad HD', time: '12 hours' },
            { label: '4K', time: '3 days' }
        ],
        media: [
            { type: 'video', src: 'images/walkthroughs/walkthrough.mp4' },
            { type: 'video', src: 'images/walkthroughs/Render walkthrough.mp4' }
        ]
    }
};

// ===================================
// Service Modal Functions
// ===================================
function openServiceModal(serviceId) {
    const modal = document.getElementById('serviceModal');
    const data = serviceData[serviceId];
    
    if (!data) {
        console.error('Service not found:', serviceId);
        return;
    }
    
    currentServiceIndex = serviceOrder.indexOf(serviceId);
    updateServiceModalContent(data);
    
    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
}

let currentMediaIndex = 0;
let currentServiceMedia = [];

function updateServiceModalContent(data) {
    document.getElementById('serviceModalTitle').textContent = data.title;
    document.getElementById('serviceModalDescription').textContent = data.description;
    document.getElementById('serviceExpectations').textContent = data.expectations;
    
    // Store current media for navigation
    currentServiceMedia = data.media;
    currentMediaIndex = 0;
    
    // Update pricing
    const pricingContainer = document.getElementById('servicePricing');
    pricingContainer.innerHTML = '';
    data.pricing.forEach(item => {
        const div = document.createElement('div');
        div.className = 'pricing-item';
        div.innerHTML = `<strong>${item.label}:</strong> <span>${item.price}</span>`;
        pricingContainer.appendChild(div);
    });
    
    // Update inclusions if available
    if (data.inclusions) {
        document.getElementById('serviceInclusionsSection').style.display = 'block';
        const inclusionsList = document.getElementById('serviceInclusions');
        inclusionsList.innerHTML = '';
        data.inclusions.forEach(item => {
            const li = document.createElement('li');
            li.textContent = item;
            inclusionsList.appendChild(li);
        });
    } else {
        document.getElementById('serviceInclusionsSection').style.display = 'none';
    }
    
    // Update lead time if available
    if (data.leadtime) {
        document.getElementById('serviceLeadtimeSection').style.display = 'block';
        const leadtimeContainer = document.getElementById('serviceLeadtime');
        leadtimeContainer.innerHTML = '';
        data.leadtime.forEach(item => {
            const div = document.createElement('div');
            div.className = 'leadtime-item';
            div.innerHTML = `<strong>${item.label}:</strong> <span>${item.time}</span>`;
            leadtimeContainer.appendChild(div);
        });
    } else {
        document.getElementById('serviceLeadtimeSection').style.display = 'none';
    }
    
    // Update media gallery with navigation
    updateMediaGallery();
}

function updateMediaGallery() {
    const gallery = document.getElementById('serviceMediaGallery');
    gallery.innerHTML = '';
    
    // Add navigation arrows if more than one media item
    if (currentServiceMedia.length > 1) {
        const prevBtn = document.createElement('button');
        prevBtn.className = 'media-nav media-prev';
        prevBtn.innerHTML = `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <polyline points="15 18 9 12 15 6"></polyline>
        </svg>`;
        prevBtn.onclick = () => navigateMedia('prev');
        gallery.appendChild(prevBtn);
        
        const nextBtn = document.createElement('button');
        nextBtn.className = 'media-nav media-next';
        nextBtn.innerHTML = `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <polyline points="9 18 15 12 9 6"></polyline>
        </svg>`;
        nextBtn.onclick = () => navigateMedia('next');
        gallery.appendChild(nextBtn);
    }
    
    // Display current media item
    const item = currentServiceMedia[currentMediaIndex];
    const mediaContainer = document.createElement('div');
    mediaContainer.className = 'media-main';
    
    if (item.type === 'image') {
        const img = document.createElement('img');
        img.src = item.src;
        img.alt = 'Service media';
        img.style.cursor = 'pointer';
        img.onclick = () => openServiceLightbox(currentMediaIndex);
        img.onerror = function() {
            console.error('Failed to load image:', item.src);
            this.style.display = 'none';
            const errorMsg = document.createElement('div');
            errorMsg.className = 'image-error';
            errorMsg.textContent = 'Image failed to load';
            errorMsg.style.padding = '20px';
            errorMsg.style.textAlign = 'center';
            errorMsg.style.color = '#999';
            mediaContainer.appendChild(errorMsg);
        };
        mediaContainer.appendChild(img);
    } else if (item.type === 'video') {
        const video = document.createElement('video');
        video.controls = true;
        video.loop = true;
        const source = document.createElement('source');
        source.src = item.src;
        source.type = 'video/mp4';
        video.appendChild(source);
        mediaContainer.appendChild(video);
    }
    
    gallery.appendChild(mediaContainer);
    
    // Add counter
    if (currentServiceMedia.length > 1) {
        const counter = document.createElement('div');
        counter.className = 'media-counter';
        counter.textContent = `${currentMediaIndex + 1} / ${currentServiceMedia.length}`;
        gallery.appendChild(counter);
    }
    
    // Add thumbnails
    if (currentServiceMedia.length > 1) {
        const thumbContainer = document.createElement('div');
        thumbContainer.className = 'media-thumbnails';
        
        currentServiceMedia.forEach((item, index) => {
            const thumb = document.createElement('div');
            thumb.className = `media-thumb ${index === currentMediaIndex ? 'active' : ''}`;
            
            if (item.type === 'image') {
                const img = document.createElement('img');
                img.src = item.src;
                img.alt = `Thumbnail ${index + 1}`;
                img.onerror = function() {
                    this.style.display = 'none';
                    const placeholder = document.createElement('div');
                    placeholder.className = 'thumb-placeholder';
                    placeholder.textContent = `${index + 1}`;
                    thumb.appendChild(placeholder);
                };
                thumb.appendChild(img);
            } else if (item.type === 'video') {
                // Create video thumbnail with play icon
                const videoThumb = document.createElement('div');
                videoThumb.className = 'video-thumb-wrapper';
                
                const video = document.createElement('video');
                video.src = item.src;
                video.muted = true;
                video.preload = 'metadata';
                
                // Try to capture a frame from the video
                video.addEventListener('loadeddata', function() {
                    video.currentTime = 1; // Seek to 1 second
                });
                
                const playIcon = document.createElement('div');
                playIcon.className = 'video-play-icon';
                playIcon.innerHTML = '▶';
                
                videoThumb.appendChild(video);
                videoThumb.appendChild(playIcon);
                thumb.appendChild(videoThumb);
            }
            
            thumb.onclick = () => {
                currentMediaIndex = index;
                updateMediaGallery();
            };
            
            thumbContainer.appendChild(thumb);
        });
        
        gallery.appendChild(thumbContainer);
    }
}

function navigateMedia(direction) {
    if (direction === 'next') {
        currentMediaIndex = (currentMediaIndex + 1) % currentServiceMedia.length;
    } else {
        currentMediaIndex = (currentMediaIndex - 1 + currentServiceMedia.length) % currentServiceMedia.length;
    }
    updateMediaGallery();
}

function openServiceLightbox(startIndex) {
    // Create service-specific lightbox with all images
    const imageMedia = currentServiceMedia.filter(item => item.type === 'image');
    if (imageMedia.length === 0) return;

    // Find the correct index inside image-only array
    // Count how many images come before the startIndex
    let imageIndex = 0;
    for (let i = 0; i < startIndex; i++) {
        if (currentServiceMedia[i].type === 'image') {
            imageIndex++;
        }
    }

    // Build dataset for this service only
    const serviceGallery = imageMedia.map(item => ({
        src: item.src,
        caption: document.getElementById('serviceModalTitle').textContent
    }));

    // Open lightbox using custom dataset
    if (typeof openLightbox === 'function') {
        openLightbox(imageIndex, serviceGallery);
    }
}

function navigateService(direction) {
    if (direction === 'next') {
        currentServiceIndex = (currentServiceIndex + 1) % serviceOrder.length;
    } else {
        currentServiceIndex = (currentServiceIndex - 1 + serviceOrder.length) % serviceOrder.length;
    }
    
    const serviceId = serviceOrder[currentServiceIndex];
    const data = serviceData[serviceId];
    
    const modalBody = document.querySelector('.service-modal .modal-body');
    if (modalBody) {
        modalBody.style.opacity = '0';
        modalBody.style.transform = direction === 'next' ? 'translateX(20px)' : 'translateX(-20px)';
        
        setTimeout(() => {
            updateServiceModalContent(data);
            modalBody.style.transition = 'opacity 0.3s ease, transform 0.3s ease';
            modalBody.style.opacity = '1';
            modalBody.style.transform = 'translateX(0)';
        }, 150);
    }
}

function closeServiceModal() {
    const modal = document.getElementById('serviceModal');
    if (modal) {
        modal.classList.remove('active');
        document.body.style.overflow = '';
    }
}

// Close service modal when clicking outside
document.addEventListener('click', (e) => {
    const modal = document.getElementById('serviceModal');
    if (modal && e.target === modal) {
        closeServiceModal();
    }
});


// ===================================
// Touch Swipe Support for Service Modal
// ===================================
let serviceTouchStartX = 0;
let serviceTouchEndX = 0;
let serviceTouchStartY = 0;
let serviceTouchEndY = 0;

document.addEventListener('touchstart', (e) => {
    const serviceModal = document.getElementById('serviceModal');
    if (serviceModal && serviceModal.classList.contains('active')) {
        serviceTouchStartX = e.changedTouches[0].screenX;
        serviceTouchStartY = e.changedTouches[0].screenY;
    }
}, { passive: true });

document.addEventListener('touchend', (e) => {
    const serviceModal = document.getElementById('serviceModal');
    if (serviceModal && serviceModal.classList.contains('active')) {
        serviceTouchEndX = e.changedTouches[0].screenX;
        serviceTouchEndY = e.changedTouches[0].screenY;
        handleServiceSwipe();
    }
}, { passive: true });

function handleServiceSwipe() {
    const swipeThreshold = 50;
    const swipeDistance = serviceTouchEndX - serviceTouchStartX;
    const verticalDistance = Math.abs(serviceTouchEndY - serviceTouchStartY);
    
    // Only trigger horizontal swipe if vertical movement is minimal
    if (verticalDistance > 100) return;
    
    if (Math.abs(swipeDistance) > swipeThreshold) {
        if (swipeDistance > 0) {
            navigateService('prev');
        } else {
            navigateService('next');
        }
    }
}

// ===================================
// Keyboard Navigation for Service Modal
// ===================================
document.addEventListener('keydown', (e) => {
    const serviceModal = document.getElementById('serviceModal');
    if (serviceModal && serviceModal.classList.contains('active')) {
        if (e.key === 'Escape') {
            closeServiceModal();
        } else if (e.key === 'ArrowRight') {
            navigateService('next');
        } else if (e.key === 'ArrowLeft') {
            navigateService('prev');
        }
    }
});

// ===================================
// Touch Events for Service Modal Navigation Buttons
// ===================================
document.addEventListener('DOMContentLoaded', () => {
    const serviceModal = document.getElementById('serviceModal');
    if (serviceModal) {
        const servicePrev = serviceModal.querySelector('.modal-prev');
        const serviceNext = serviceModal.querySelector('.modal-next');
        
        if (servicePrev) {
            servicePrev.addEventListener('touchstart', (e) => {
                e.preventDefault();
                e.stopPropagation();
                navigateService('prev');
            }, { passive: false });
        }
        
        if (serviceNext) {
            serviceNext.addEventListener('touchstart', (e) => {
                e.preventDefault();
                e.stopPropagation();
                navigateService('next');
            }, { passive: false });
        }
    }
});

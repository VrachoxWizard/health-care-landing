import os
from PIL import Image

def slice_all_assets():
    os.makedirs('public/assets/images', exist_ok=True)
    img = Image.open('ui reference.webp')
    
    # 1. Hero doctor (right side of hero, free of text)
    hero_doc = img.crop((535, 142, 1024, 700))
    hero_doc.save('public/assets/images/hero-doctor.webp')
    
    # 2. About doctor (composite with Open Hours badge)
    about_doc = img.crop((106, 882, 490, 1235))
    about_doc.save('public/assets/images/about-doctor.webp')
    
    # 3. Child care (baby with teddy bear)
    child = img.crop((106, 2330, 520, 2720))
    child.save('public/assets/images/child-care.webp')
    
    # 4. Lab team
    lab = img.crop((510, 3050, 918, 3420))
    lab.save('public/assets/images/lab-team.webp')
    
    # 5. 4 gallery images
    g1 = img.crop((106, 3496, 288, 3670))
    g2 = img.crop((316, 3496, 498, 3670))
    g3 = img.crop((526, 3496, 708, 3670))
    g4 = img.crop((736, 3496, 918, 3670))
    g1.save('public/assets/images/lab-gallery-1.webp')
    g2.save('public/assets/images/lab-gallery-2.webp')
    g3.save('public/assets/images/lab-gallery-3.webp')
    g4.save('public/assets/images/lab-gallery-4.webp')
    
    # 6. Patient avatar (Karen Levin)
    avatar = img.crop((109, 3905, 187, 3983))
    avatar.save('public/assets/images/patient-avatar.webp')
    
    # 7. 4 Team doctors
    d1 = img.crop((106, 4420, 290, 4615))
    d2 = img.crop((315, 4420, 500, 4615))
    d3 = img.crop((525, 4420, 710, 4615))
    d4 = img.crop((735, 4420, 918, 4615))
    d1.save('public/assets/images/doctor-mira.webp')
    d2.save('public/assets/images/doctor-abram.webp')
    d3.save('public/assets/images/doctor-ashlynn.webp')
    d4.save('public/assets/images/doctor-cooper.webp')
    
    # 8. Footer map
    fmap = img.crop((518, 4995, 895, 5145))
    fmap.save('public/assets/images/footer-map.webp')
    
    print("All 13 assets sliced successfully!")

if __name__ == '__main__':
    slice_all_assets()

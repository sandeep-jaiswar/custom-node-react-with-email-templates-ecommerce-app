import React, { useRef } from 'react'
import Card from '../../../common/Card';
import Carousel from '../../../common/Carousel';
import Image from '../../../common/Image';

function HomeGridSystem() {
    const carouselref = useRef(null);
    const createGrids = arr => {
        return (
            <div className='four-grid'>
                {arr.map((cur, i) => (
                    <div key={i}>
                        <Image url={cur.url} />
                        {cur.name && <div>{cur.name}</div>}
                    </div>
                ))}
            </div>
        )
    }
    const imgArr = [{ url: 'https://images-eu.ssl-images-amazon.com/images/G/31/img21/Fashion/Event/Gateway/WRS-Jun/PC_QC_186/Comp-186/5-min._SY116_CB666463598_.jpg', name: 'women clothes' },
    { url: 'https://images-eu.ssl-images-amazon.com/images/G/31/img21/Fashion/Event/Gateway/WRS-Jun/PC_QC_186/Comp-186/2-min._SY116_CB666463598_.jpg', name: 'footware' },
    { url: 'https://images-eu.ssl-images-amazon.com/images/G/31/img21/AmazonLaunchpad/Gateway/May/PC/21.Protein-supplements_186x116._SY116_CB668532477_.jpg', name: 'protein suppliments' },
    { url: 'https://images-eu.ssl-images-amazon.com/images/G/31/img20/Events/Pujo/btf/rev/Artboard_1_1x_QC3._SY116_CB640925108_.jpg', name: 'smartphones and accessories' }]
    const sliderImgArr = [{ url: 'https://images-eu.ssl-images-amazon.com/images/G/31/img21/Fashion/Event/Gateway/WRS-Jun/PC_QC_186/Comp-186/5-min._SY116_CB666463598_.jpg', name: 'women clothes' },
    { url: 'https://images-eu.ssl-images-amazon.com/images/G/31/img21/Fashion/Event/Gateway/WRS-Jun/PC_QC_186/Comp-186/2-min._SY116_CB666463598_.jpg', name: 'footware' },
    { url: 'https://images-eu.ssl-images-amazon.com/images/G/31/img21/AmazonLaunchpad/Gateway/May/PC/21.Protein-supplements_186x116._SY116_CB668532477_.jpg', name: 'protein suppliments' },
    { url: 'https://images-eu.ssl-images-amazon.com/images/G/31/img20/Events/Pujo/btf/rev/Artboard_1_1x_QC3._SY116_CB640925108_.jpg', name: 'smartphones and accessories' },
    { url: 'https://images-eu.ssl-images-amazon.com/images/G/31/img21/Fashion/Event/Gateway/WRS-Jun/PC_QC_186/Comp-186/5-min._SY116_CB666463598_.jpg', name: 'women clothes' },
    { url: 'https://images-eu.ssl-images-amazon.com/images/G/31/img21/Fashion/Event/Gateway/WRS-Jun/PC_QC_186/Comp-186/2-min._SY116_CB666463598_.jpg', name: 'footware' },
    { url: 'https://images-eu.ssl-images-amazon.com/images/G/31/img21/AmazonLaunchpad/Gateway/May/PC/21.Protein-supplements_186x116._SY116_CB668532477_.jpg', name: 'protein suppliments' },
    { url: 'https://images-eu.ssl-images-amazon.com/images/G/31/img20/Events/Pujo/btf/rev/Artboard_1_1x_QC3._SY116_CB640925108_.jpg', name: 'smartphones and accessories' },
    { url: 'https://images-eu.ssl-images-amazon.com/images/G/31/img21/Fashion/Event/Gateway/WRS-Jun/PC_QC_186/Comp-186/5-min._SY116_CB666463598_.jpg', name: 'women clothes' },
    { url: 'https://images-eu.ssl-images-amazon.com/images/G/31/img21/Fashion/Event/Gateway/WRS-Jun/PC_QC_186/Comp-186/2-min._SY116_CB666463598_.jpg', name: 'footware' },
    { url: 'https://images-eu.ssl-images-amazon.com/images/G/31/img21/AmazonLaunchpad/Gateway/May/PC/21.Protein-supplements_186x116._SY116_CB668532477_.jpg', name: 'protein suppliments' },
    { url: 'https://images-eu.ssl-images-amazon.com/images/G/31/img20/Events/Pujo/btf/rev/Artboard_1_1x_QC3._SY116_CB640925108_.jpg', name: 'smartphones and accessories' },
    { url: 'https://images-eu.ssl-images-amazon.com/images/G/31/img21/Fashion/Event/Gateway/WRS-Jun/PC_QC_186/Comp-186/5-min._SY116_CB666463598_.jpg', name: 'women clothes' },
    { url: 'https://images-eu.ssl-images-amazon.com/images/G/31/img21/Fashion/Event/Gateway/WRS-Jun/PC_QC_186/Comp-186/2-min._SY116_CB666463598_.jpg', name: 'footware' },
    { url: 'https://images-eu.ssl-images-amazon.com/images/G/31/img21/AmazonLaunchpad/Gateway/May/PC/21.Protein-supplements_186x116._SY116_CB668532477_.jpg', name: 'protein suppliments' },
    { url: 'https://images-eu.ssl-images-amazon.com/images/G/31/img20/Events/Pujo/btf/rev/Artboard_1_1x_QC3._SY116_CB640925108_.jpg', name: 'smartphones and accessories' },
    { url: 'https://images-eu.ssl-images-amazon.com/images/G/31/img21/Fashion/Event/Gateway/WRS-Jun/PC_QC_186/Comp-186/5-min._SY116_CB666463598_.jpg', name: 'women clothes' },
    { url: 'https://images-eu.ssl-images-amazon.com/images/G/31/img21/Fashion/Event/Gateway/WRS-Jun/PC_QC_186/Comp-186/2-min._SY116_CB666463598_.jpg', name: 'footware' },
    { url: 'https://images-eu.ssl-images-amazon.com/images/G/31/img21/AmazonLaunchpad/Gateway/May/PC/21.Protein-supplements_186x116._SY116_CB668532477_.jpg', name: 'protein suppliments' },
    { url: 'https://images-eu.ssl-images-amazon.com/images/G/31/img20/Events/Pujo/btf/rev/Artboard_1_1x_QC3._SY116_CB640925108_.jpg', name: 'smartphones and accessories' }]
    function shuffleArr(array) {
        for (var i = array.length - 1; i > 0; i--) {
            var rand = Math.floor(Math.random() * (i + 1));
            [array[i], array[rand]] = [array[rand], array[i]]
        }
        return array;
    }

    return (
        <div className='home-grid-sys'>
            <div className="slider-grid">
                <Image url={`https://assets.mspimages.in/wp-content/uploads/2019/09/Flipkart-Big-Billion-Day-Banner-01.jpg`} customImgClass='slider-img' />
            </div>
            <Card customClass="" title="Food & beverages" footerText="see more">
                {createGrids(shuffleArr(imgArr))}
            </Card>
            <Card customClass="" title="Professional tools, testing & more" footerText="see more">
                {createGrids(shuffleArr(imgArr))}
            </Card>
            <Card customClass="" title="Up to 70% off | Electronics clearance" footerText="see more">
                {createGrids(shuffleArr(imgArr))}
            </Card>
            <Card customClass="" title="Sign in for your best experience" footerText="see more">
                {createGrids(shuffleArr(imgArr))}
            </Card>
            <Card customClass="" title="Automotive essentials | Up to 60% off" footerText="see more">
                {createGrids(shuffleArr(imgArr))}
            </Card>
            <Card customClass="shop-by-cat-grid" title="Shop by Category" footerText="see more">
                {createGrids(shuffleArr(imgArr))}
            </Card>
            <Card customClass="styles-for-men-grid" title="Styles for Men | Up to 70% off" footerText="see more">
                {createGrids(shuffleArr(imgArr))}
            </Card>
            <Card customClass="" title="Revamp your home in style" footerText="see more">
                {createGrids(shuffleArr(imgArr))}
            </Card>
            <Card customClass="todays-grid" title='Today’s Deals'>
                <Carousel ref={carouselref} arr={shuffleArr(sliderImgArr)}/>
            </Card>
            <Card customClass="like-new-prod-grid" title='Up to 70% off | Like-new products' >
                <Carousel ref={carouselref} arr={shuffleArr(sliderImgArr)}/>
            </Card>
            <Card customClass="" title="Up to 50% off | Garden & outdoor" footerText="see more">
                {createGrids(shuffleArr(imgArr))}
            </Card>
            <Card customClass="" title="Up to 45% off | Shop by Pet" footerText="see more">
                {createGrids(shuffleArr(imgArr))}
            </Card>
            <Card customClass="" title="Effective dishwashing for Indian cooking" footerText="see more">
                {createGrids(shuffleArr(imgArr))}
            </Card>
            <Card customClass="" title="Start a hobby in photography" footerText="see more">
                {createGrids(shuffleArr(imgArr))}
            </Card>
            <Card customClass="bestselling-sarees-grid" title='Up to 80% off | Bestselling sarees'>
                <Carousel ref={carouselref} arr={shuffleArr(sliderImgArr)}/>
            </Card>
            <Card customClass="bestselling-drinkware-grid" title='Up to 80% off | Bestselling glassware and drinkware' >
                <Carousel ref={carouselref} arr={shuffleArr(sliderImgArr)}/>
            </Card>
            <Card customClass="" title="Value Packs under ₹599 | Amazon Brands & more" footerText="see more">
                {createGrids(shuffleArr(imgArr))}
            </Card>
            <Card customClass="" title="Handpicked fitness essentials" footerText="see more">
                {createGrids(shuffleArr(imgArr))}
            </Card>
            <Card customClass="" title="Pick from these types of masks" footerText="see more">
                {createGrids(shuffleArr(imgArr))}
            </Card>
            <Card customClass="" title="Fashion clearance store | 50% - 70% off" footerText="see more">
                {createGrids(shuffleArr(imgArr))}
            </Card>
            <Card customClass="bestselling-smartphones-grid" title='Explore the bestselling smartphones'>
                <Carousel ref={carouselref} arr={shuffleArr(sliderImgArr)}/>
            </Card>
            <Card customClass="bestselling-furniture-grid" title='Up to 80% off | Bestselling home furniture'>
                <Carousel ref={carouselref} arr={shuffleArr(sliderImgArr)}/>
            </Card>
            <Card customClass="" title="Cookware & dining" footerText="see more">
                {createGrids(shuffleArr(imgArr))}
            </Card>
            <Card customClass="" title="Pujo shopping store" footerText="see more">
                {createGrids(shuffleArr(imgArr))}
            </Card>
            <Card customClass="" title="For your little one | Amazon Brands & more" footerText="see more">
                {createGrids(shuffleArr(imgArr))}
            </Card>
            <Card customClass="" title="Flaunt the latest trends this Pujo" footerText="see more">
                {createGrids(shuffleArr(imgArr))}
            </Card>
            <Card customClass="bestselling-Grocery-grid" title='Best Sellers in Grocery & Gourmet Foods'>
                <Carousel ref={carouselref} arr={shuffleArr(sliderImgArr)}/>
            </Card>
        </div>
    )
}

export default HomeGridSystem

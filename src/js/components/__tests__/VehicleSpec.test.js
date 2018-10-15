import React from 'react';
import { shallow } from '../../enzyme';

import VehicleSpec from '../presentational/VehicleSpec';

const testData = {
  status: 'success',
  data: {
    vehicle: {
      body_style: '4dr CVT LX',
      categories: [
        'daily',
        'fuel_efficient',
        'cpo',
      ],
      chrome_image_url: 'http://cdn-prod.prod.fair.engineering/vehicle-images/0640_001_png/MY2016/10846/10846_cc0640_001_BS.png',
      cpo_flag: true,
      exterior_color_info: {
        fair_colored_image: 'http://cdn-prod.prod.fair.engineering/vehicle-images/0640_001_png/MY2016/10846/10846_cc0640_001_BS.png',
        has_color_image: true,
      },
      id: '19XFC2F59GE2276732016',
      image_location_list: [
        'http://cdn-prod.prod.fair.engineering/vehicle-images/0640_032_png/MY2016/10846/10846_cc0640_032_BS.png',
        'https://content.homenetiol.com/2001593/2112019/640x480/28ed530709334ec58855b2a2fbf3df3b.jpg',
        'https://content.homenetiol.com/2001593/2112019/640x480/21010f808ea144fea0d73441c2593a6d.jpg',
        'https://content.homenetiol.com/2001593/2112019/640x480/4eb8ef65ed5d4b4a9dc3b7c81cf78b24.jpg',
        'https://content.homenetiol.com/2001593/2112019/640x480/d8565261a3544f07a56897c602152a60.jpg',
        'https://content.homenetiol.com/2001593/2112019/640x480/ebf7b28a6d5545bdab204200f1c655c3.jpg',
        'https://content.homenetiol.com/2001593/2112019/640x480/ca2df8b0532543269a3807e08f3cd2f4.jpg',
        'https://content.homenetiol.com/2001593/2112019/640x480/ae54d1a9caf84f5b9a99819335b124f9.jpg',
        'https://content.homenetiol.com/2001593/2112019/640x480/bd8c3a219a1a40ae9d0f34416b72cd06.jpg',
        'https://content.homenetiol.com/2001593/2112019/640x480/a42226cc586f4e6486a34337f3b86cc1.jpg',
        'https://content.homenetiol.com/2001593/2112019/640x480/b45d421d054f4c4da90669a20f029bd5.jpg',
        'https://content.homenetiol.com/2001593/2112019/640x480/48458b96bb0b4ba28d8f9be7c0e9af71.jpg',
        'https://content.homenetiol.com/2001593/2112019/640x480/2c3bd441b6f54d5f9358e3fb4e164397.jpg',
      ],
      make: 'Honda',
      mileage: 35292,
      model: 'Civic Sedan',
      model_year: '2016',
      new_used_flag: 'USED',
      product_financials: [
        {
          id: 19882216,
          monthly_payment_cents: 29000,
          start_fee_cents: 90000,
        },
      ],
      trim: 'LX',
    },
  },
};

describe('VehicleSpec tests', () => {
  it('renders appropriately for productList', () => {
    const purpose = 'productList';
    const wrapper = shallow(<VehicleSpec
      purpose={purpose}
      data={testData.data.vehicle}
    />);
    expect(wrapper.find('.detailedSpec')).toBeDefined();
  });
  it('renders appropriately for detailPage', () => {
    const purpose = 'detail';
    const wrapper = shallow(<VehicleSpec
      purpose={purpose}
      data={testData.data.vehicle}
      handleFavorite={() => null}
    />);
    expect(wrapper.find('.mileageInfo')).toBeDefined();
  });
});

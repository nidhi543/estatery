
import House1Lg from './assets/img/houses/house1lg.png';
import House2Lg from './assets/img/houses/house2lg.png';
import House3Lg from './assets/img/houses/house3lg.png';
import House4Lg from './assets/img/houses/house4lg.png';
import House5Lg from './assets/img/houses/house5lg.png';
import House6Lg from './assets/img/houses/house6lg.png';
import House7Lg from './assets/img/houses/house7lg.png';
import House8Lg from './assets/img/houses/house8lg.png';
import House9Lg from './assets/img/houses/house9lg.png';
import House10Lg from './assets/img/houses/house10lg.png';
import House11Lg from './assets/img/houses/house11lg.png';
import House12Lg from './assets/img/houses/house12lg.png';

// import apartments images
import Apartment1Lg from './assets/img/apartments/a1lg.png';
import Apartment2Lg from './assets/img/apartments/a2lg.png';
import Apartment3Lg from './assets/img/apartments/a3lg.png';
import Apartment4Lg from './assets/img/apartments/a4lg.png';
import Apartment5Lg from './assets/img/apartments/a5lg.png';
import Apartment6Lg from './assets/img/apartments/a6lg.png';

// import agents images
import Agent1 from './assets/img/agents/agent1.png';
import Agent2 from './assets/img/agents/agent2.png';

 const housesData = [
    {
      id: 1,
      type: 'House',
      name: 'Palm Harbor',
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet, illoat. Repudiandae ratione impedit delectus consectetur. Aspernaturvero obcaecati placeat ab distinctio unde ipsam molestias atqueratione delectus blanditiis nemo eius dignissimos doloremque quaealiquid maiores id tempore consequatur, quod pariatur saepe.',

      image: House1Lg,
      country: 'United States',
      address: '209, Green Valley, Highland Lake CA 609256',
      bedrooms: '5',
      bathrooms: '3',
      surface: '4100 sq ft',
      year: '2015',
      popular: 'true',
      price: '100000',
      agent: {
        image: Agent1,
        name: 'John Doe',
        phone: '0123 456 78910',
      },
    },
    {
      id: 2,
      type: 'House',
      name: 'Beverly Springfield',
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet, illoat. Repudiandae ratione impedit delectus consectetur. Aspernaturvero obcaecati placeat ab distinctio unde ipsam molestias atqueratione delectus blanditiis nemo eius dignissimos doloremque quaealiquid maiores id tempore consequatur, quod pariatur saepe.',
     image: House2Lg,
      country: 'Canada',
      address: '2821 Lake Sevilla Talbot St. Bridgewater, NJ 08807',
      bedrooms: '6',
      bathrooms: '3',
      surface: '4200 sq ft',
      year: '2016',
      popular: 'true',
      price: '140000',
      agent: {
        image: Agent2,
        name: 'Jane Doe',
        phone: '0123 456 78910',
      },
    },
    {
      id: 3,
      type: 'House',
      name: 'Faulkner Ave',
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet, illoat. Repudiandae ratione impedit delectus consectetur. Aspernaturvero obcaecati placeat ab distinctio unde ipsam molestias atqueratione delectus blanditiis nemo eius dignissimos doloremque quaealiquid maiores id tempore consequatur, quod pariatur saepe.',
      image: House3Lg,
      country: 'United States',
      address: '909 Woodland, St.Michigan, VA 22304',
      bedrooms: '6',
      bathrooms: '3',
      surface: '4200 sq ft',
      year: '2016',
      price: '170000',
      popular: 'true',
      agent: {
        image: Agent1,
        name: 'John Doe',
        phone: '0123 456 78910',
      },
    },
    {
      id: 4,
      type: 'House',
      name: 'Palm Jumerah',
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet, illoat. Repudiandae ratione impedit delectus consectetur. Aspernaturvero obcaecati placeat ab distinctio unde ipsam molestias atqueratione delectus blanditiis nemo eius dignissimos doloremque quaealiquid maiores id tempore consequatur, quod pariatur saepe.',
      image: House4Lg,
      country: 'Canada',
      address: '84 Woodland St. Cocoa, FL 32927',
      bedrooms: '6',
      bathrooms: '3',
      surface: '4200 sq ft',
      year: '2016',
      price: '200000',
      agent: {
        image: Agent2,
        name: 'Jane Doe',
        phone: '0123 456 78910',
      },
    },
    {
      id: 5,
      type: 'House',
      name: 'House Dove',
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet, illoat. Repudiandae ratione impedit delectus consectetur. Aspernaturvero obcaecati placeat ab distinctio unde ipsam molestias atqueratione delectus blanditiis nemo eius dignissimos doloremque quaealiquid maiores id tempore consequatur, quod pariatur saepe.',
      image: House5Lg,
      country: 'United States',
      address: '28 Westport Dr. Warminster, PA 18974',
      bedrooms: '5',
      bathrooms: '3',
      surface: '4200 sq ft',
      year: '2015',
      price: '210000',
      agent: {
        image: Agent1,
        name: 'John Doe',
        phone: '0123 456 78910',
      },
    },
    {
      id: 6,
      type: 'House',
      name: 'Villa Spring',
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet, illoat. Repudiandae ratione impedit delectus consectetur. Aspernaturvero obcaecati placeat ab distinctio unde ipsam molestias atqueratione delectus blanditiis nemo eius dignissimos doloremque quaealiquid maiores id tempore consequatur, quod pariatur saepe.',
      image: House6Lg,
      country: 'Canada',
      address: '32 Pawnee Street Butte, MT 59701',
      bedrooms: '6',
      bathrooms: '3',
      surface: '6200 sq ft',
      year: '2014',
      price: '220000',
      agent: {
        image: Agent2,
        name: 'Jane Doe',
        phone: '0123 456 78910',
      },
    },
    {
      id: 7,
      type: 'Apartament',
      name: 'Apartament Ave',
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet, illoat. Repudiandae ratione impedit delectus consectetur. Aspernaturvero obcaecati placeat ab distinctio unde ipsam molestias atqueratione delectus blanditiis nemo eius dignissimos doloremque quaealiquid maiores id tempore consequatur, quod pariatur saepe.',
      image: Apartment1Lg,
      country: 'Canada',
      address: '32 Pawnee Street Butte, MT 59701',
      bedrooms: '2',
      bathrooms: '1',
      surface: '1200 sq ft',
      year: '2012',
      price: '20000',
      agent: {
        image: Agent1,
        name: 'John Doe',
        phone: '0123 456 78910',
      },
    },
    {
      id: 8,
      type: 'Apartament',
      name: 'Apartament Beverl',
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet, illoat. Repudiandae ratione impedit delectus consectetur. Aspernaturvero obcaecati placeat ab distinctio unde ipsam molestias atqueratione delectus blanditiis nemo eius dignissimos doloremque quaealiquid maiores id tempore consequatur, quod pariatur saepe.',
     image: Apartment2Lg,
      country: 'United States',
      address: '28 Westport Dr. Warminster, PA 18974',
      bedrooms: '3',
      bathrooms: '1',
      surface: '1000 sq ft',
      year: '2011',
      price: '30000',
      agent: {
        image: Agent2,
        name: 'John Doe',
        phone: '0123 456 78910',
      },
    },
    {
      id: 9,
      type: 'Apartament',
      name: 'Faulkner Apartament',
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet, illoat. Repudiandae ratione impedit delectus consectetur. Aspernaturvero obcaecati placeat ab distinctio unde ipsam molestias atqueratione delectus blanditiis nemo eius dignissimos doloremque quaealiquid maiores id tempore consequatur, quod pariatur saepe.',
      image: Apartment3Lg,
      country: 'United States',
      address: '84 Woodland St. Cocoa, FL 32927',
      bedrooms: '2',
      bathrooms: '1',
      surface: '1100 sq ft',
      year: '2011',
      price: '40000',
      agent: {
        image: Agent1,
        name: 'John Doe',
        phone: '0123 456 78910',
      },
    },
    {
      id: 10,
      type: 'House',
      name: 'House 7',
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet, illoat. Repudiandae ratione impedit delectus consectetur. Aspernaturvero obcaecati placeat ab distinctio unde ipsam molestias atqueratione delectus blanditiis nemo eius dignissimos doloremque quaealiquid maiores id tempore consequatur, quod pariatur saepe.',
      image: House7Lg,
      country: 'Canada',
      address: '7240C Argyle St. Lawndale, CA 90260',
      bedrooms: '5',
      bathrooms: '3',
      surface: '3200 sq ft',
      year: '2015',
      price: '117000',
      agent: {
        image: Agent2,
        name: 'Jane Doe',
        phone: '0123 456 78910',
      },
    },
    {
      id: 11,
      type: 'House',
      name: 'Eve Hose',
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet, illoat. Repudiandae ratione impedit delectus consectetur. Aspernaturvero obcaecati placeat ab distinctio unde ipsam molestias atqueratione delectus blanditiis nemo eius dignissimos doloremque quaealiquid maiores id tempore consequatur, quod pariatur saepe.',
      image: House8Lg,
      country: 'Canada',
      address: '798 Talbot St. Bridgewater, NJ 08807',
      bedrooms: '7',
      bathrooms: '2',
      surface: '2200 sq ft',
      year: '2019',
      price: '145000',
      agent: {
        image: Agent1,
        name: 'John Doe',
        phone: '0123 456 78910',
      },
    },
    {
      id: 12,
      type: 'House',
      name: 'Autmn leave',
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet, illoat. Repudiandae ratione impedit delectus consectetur. Aspernaturvero obcaecati placeat ab distinctio unde ipsam molestias atqueratione delectus blanditiis nemo eius dignissimos doloremque quaealiquid maiores id tempore consequatur, quod pariatur saepe.',
      image: House9Lg,
      country: 'United States',
      address: '2 Glen Creek St. Alexandria, VA 22304',
      bedrooms: '4',
      bathrooms: '4',
      surface: '4600 sq ft',
      year: '2015',
      price: '139000',
      agent: {
        image: Agent2,
        name: 'Jane Doe',
        phone: '0123 456 78910',
      },
    },
    {
      id: 13,
      type: 'House',
      name: 'Snow Hit',
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet, illoat. Repudiandae ratione impedit delectus consectetur. Aspernaturvero obcaecati placeat ab distinctio unde ipsam molestias atqueratione delectus blanditiis nemo eius dignissimos doloremque quaealiquid maiores id tempore consequatur, quod pariatur saepe.',
    image: House10Lg,
      country: 'Canada',
      address: '84 Woodland St. Cocoa, FL 32927',
      bedrooms: '5',
      bathrooms: '2',
      surface: '5200 sq ft',
      year: '2014',
      price: '180000',
      agent: {
        image: Agent1,
        name: 'John Doe',
        phone: '0123 456 78910',
      },
    },
    {
      id: 14,
      type: 'House',
      name: 'House Velt',
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet, illoat. Repudiandae ratione impedit delectus consectetur. Aspernaturvero obcaecati placeat ab distinctio unde ipsam molestias atqueratione delectus blanditiis nemo eius dignissimos doloremque quaealiquid maiores id tempore consequatur, quod pariatur saepe.',
      image: House11Lg,
      country: 'United States',
      address: '28 Westport Dr. Warminster, PA 18974',
      bedrooms: '5',
      bathrooms: '2',
      surface: '3200 sq ft',
      year: '2011',
      price: '213000',
      agent: {
        image: Agent2,
        name: 'Jane Doe',
        phone: '0123 456 78910',
      },
    },
    {
      id: 15,
      type: 'House',
      name: 'Cult Fill',
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet, illoat. Repudiandae ratione impedit delectus consectetur. Aspernaturvero obcaecati placeat ab distinctio unde ipsam molestias atqueratione delectus blanditiis nemo eius dignissimos doloremque quaealiquid maiores id tempore consequatur, quod pariatur saepe.',
      image: House12Lg,
      country: 'Canada',
      address: '32 Pawnee Street Butte, MT 59701',
      bedrooms: '4',
      bathrooms: '3',
      surface: '5200 sq ft',
      year: '2013',
      price: '221000',
      agent: {
        image: Agent1,
        name: 'John Doe',
        phone: '0123 456 78910',
      },
    },
    {
      id: 16,
      type: 'Apartament',
      name: 'Apartament SumFest',
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet, illoat. Repudiandae ratione impedit delectus consectetur. Aspernaturvero obcaecati placeat ab distinctio unde ipsam molestias atqueratione delectus blanditiis nemo eius dignissimos doloremque quaealiquid maiores id tempore consequatur, quod pariatur saepe.',
    //   image: Apartment4,
      image: Apartment4Lg,
      country: 'Canada',
      address: '32 Pawnee Street Butte, MT 59701',
      bedrooms: '2',
      bathrooms: '1',
      surface: '1300 sq ft',
      year: '2011',
      price: '21000',
      agent: {
        image: Agent2,
        name: 'Jane Doe',
        phone: '0123 456 78910',
      },
    },
    {
      id: 17,
      type: 'Apartament',
      name: 'MinSoom',
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet, illoat. Repudiandae ratione impedit delectus consectetur. Aspernaturvero obcaecati placeat ab distinctio unde ipsam molestias atqueratione delectus blanditiis nemo eius dignissimos doloremque quaealiquid maiores id tempore consequatur, quod pariatur saepe.',
      image: Apartment5Lg,
      country: 'United States',
      address: '28 Westport Dr. Warminster, PA 18974',
      bedrooms: '3',
      bathrooms: '1',
      surface: '1000 sq ft',
      year: '2012',
      price: '32000',
      agent: {
        image: Agent1,
        name: 'John Doe',
        phone: '0123 456 78910',
      },
    },
    {
      id: 18,
      type: 'Apartament',
      name: 'Apart Velt',
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet, illoat. Repudiandae ratione impedit delectus consectetur. Aspernaturvero obcaecati placeat ab distinctio unde ipsam molestias atqueratione delectus blanditiis nemo eius dignissimos doloremque quaealiquid maiores id tempore consequatur, quod pariatur saepe.',
      image: Apartment6Lg,
      country: 'Canada',
      address: '84 Woodland St. Cocoa, FL 32927',
      bedrooms: '3',
      bathrooms: '1',
      surface: '1200 sq ft',
      year: '2010',
      price: '38000',
      agent: {
        image: Agent2,
        name: 'Jane Doe',
        phone: '0123 456 78910',
      },
    },
  ];
  export default housesData;
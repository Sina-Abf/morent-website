import Image from 'next/image';
import bodycar from '../../public/images/body-car.png';
import bodycar2 from '../../public/images/body-car-2.png';
import Options from './ui/options';
import { UpDownArrowIcon } from '@/app/icons';
import Button from './ui/button';

const Hero = () => {
  return (
    <section className="p-4">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-4 mb-8">
        <div className="">
          <Image src={bodycar} alt="body-car" priority />
        </div>
        <div className=" hidden md:block">
          <Image src={bodycar2} alt="body-car-2" priority />
        </div>
      </div>
      <div className="flex flex-col md:flex-row justify-between items-center">
        <Options className="flex-1" title="Pick - Up" />
        <div className="flex items-center mx-4 -my-4 z-10">
          <Button size="big">
            <UpDownArrowIcon />
          </Button>
        </div>
        <Options className="flex-1" title="Drop - Off" />
      </div>
    </section>
  );
};
export default Hero;

import Header from '@/components/ui/Header'
import Icon from '@/components/ui/Icon'
import Image from 'next/image'
const sampleImage = "/images/yo.jpg"

const Page = () => {
  return (
    <div className="">
      <Header />
      <div className="flex flex-row px-16 font-semibold gap-16 py-16">
        <div className="flex-1 relative aspect-square max-w-100">
          <Image
            src={sampleImage}
            alt="Portrait Photo"
            fill
            className="object-cover"
          />
        </div>
        <div className="flex items-center flex-1 flex-col gap-8">
          <div className="text-7xl text-[#00D9FF]">
            Liam Loeffel
          </div>
          <div className="text-2xl">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam placerat eget orci ac dapibus. Vivamus gravida quis lectus quis gravida. Sed molestie nisi consectetur neque faucibus, nec rutrum sapien tristique. Duis auctor venenatis neque et mollis. Suspendisse quis augue volutpat, vestibulum arcu ac, blandit diam. Nulla condimentum, lorem quis maximus ultricies, ante elit efficitur turpis, ac molestie lacus ligula sit amet metus. Maecenas volutpat nibh eu magna ultricies sagittis. Duis nibh felis, venenatis ut mattis eget, posuere eu tortor.
          </div>
        </div>
      </div>

      <div className="flex flex-col gap-5">
        <div className="flex justify-center text-7xl font-semibold">
          Skills
        </div>
        <div className="flex flex-row justify-center gap-10">
          <Icon src={sampleImage} description="hi Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam placerat eget orci ac dapibus. Vivamus gravida quis lectus quis gravida. Sed molestie nisi consectetur neque faucibus, nec rutrum sapien tristique. Duis auctor venenatis neque et mollis. Suspendisse quis augue volutpat, vestibulum arcu ac, blandit diam. Nulla condimentum, lorem quis maximus ultricies, ante elit efficitur turpis, ac molestie lacus ligula sit amet metus. Maecenas volutpat nibh eu magna ultricies sagittis. Duis nibh felis, venenatis ut mattis eget, posuere eu tortor."/>
          <Icon src={sampleImage} description="hi"/>
          <Icon src={sampleImage} description="hi"/>
          <Icon src={sampleImage} description="hi"/>
          <Icon src={sampleImage} description="hi"/>
          <Icon src={sampleImage} description="hi"/>
        </div>
        <div className="flex flex-row justify-center gap-10">
          <Icon src={sampleImage} description="hi"/>
          <Icon src={sampleImage} description="hi"/>
          <Icon src={sampleImage} description="hi"/>
          <Icon src={sampleImage} description="hi"/>
          <Icon src={sampleImage} description="hi"/>
        </div>
      </div>
      <div>

      </div>
    </div>
  )

}

export default Page
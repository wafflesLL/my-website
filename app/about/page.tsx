import Header from '@/components/ui/Header'
import Icon from '@/components/ui/Icon'
import Image from 'next/image'
const sampleImage = "/images/default.webp"

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
            This is a description 
          </div>
        </div>
      </div>

      <div className="flex flex-col gap-5">
        <div className="flex justify-center text-7xl font-semibold">
          Skills
        </div>
        <div className="flex flex-row justify-center gap-10">
          <Icon src={sampleImage} description="hi"/>
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

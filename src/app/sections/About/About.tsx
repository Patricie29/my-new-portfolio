import Bounded from '@/app/components/Bounded'
import Button from '@/app/components/Button'
import Heading from '@/app/components/Heading'
import { FC } from 'react'
// import myAvatar from '@/public/Avatar/11.jpg'
import Avatar from '@/app/components/Avatar';


interface AboutProps {

}

const About: FC<AboutProps> = ({ }) => {
    return <section id='about'>
        <Bounded>

            <div className="grid gap-x-8 gap-y-6 md:grid-cols-[2fr,1fr]">
                <Heading as='h2' size='md' className='col-start-1'>
                    About Patricie
                </Heading>

                <div className="prose prose-lg prose-slate prose-invert col-start-1">
                    <p>
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. At numquam unde assumenda, accusantium blanditiis quo illum nulla, fugit dolorem, enim voluptatem eligendi deserunt! Ullam animi non asperiores saepe eveniet necessitatibus earum ad minima temporibus labore quisquam impedit omnis voluptas ipsa blanditiis, laudantium rerum? Dolorem facilis consequatur at cupiditate dicta explicabo.
                    </p>
                </div>

                <Button
                    linkField='/resume/01_Patricie_Bakosova_Resume.pdf' // Adjust the path if necessary
                    label='Download Resume'
                />

                <Avatar className="row-start-1 max-w-sm md:col-start-2 md:row-end-3" />
            </div>

        </Bounded>
    </section >
}

export default About
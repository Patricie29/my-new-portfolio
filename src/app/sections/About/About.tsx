import Bounded from '@/app/components/Bounded'
import Button from '@/app/components/Button'
import Heading from '@/app/components/Heading'
import { FC } from 'react'
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
                        Hey! I&apos;m Patricie, diving deep into front-end development with a special spot for web3 and crypto. My self-taught journey has led me to Timecloud, where I mix creativity with code every day.
                        <br />
                        Besides coding, I&apos;m all about staying active - whether it&apos;s Muay Thai, catching waves, or exploring the underwater world through diving. These activities keep me balanced and fuel my creativity back at work.

                        <br />

                        I believe in clear, straightforward communication and working together to get things done. I love sharing ideas and learning from others. Keeping life and work in harmony, pushing boundaries in tech, and always being ready for the next big wave or project!
                    </p>
                </div>

                <Button
                    linkField='/Resume/01_Patricie_Bakosova_Resume.pdf'
                    label='Download Resume'
                />

                <Avatar className="row-start-1 max-w-sm md:col-start-2 md:row-end-3" />
            </div>

        </Bounded>
    </section >
}

export default About
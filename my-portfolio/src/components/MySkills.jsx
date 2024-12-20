import cpp from '../assets/cpp.svg'
import python from '../assets/python.svg'
import javascript from '../assets/javascript.svg'
import html5 from '../assets/html5.svg'
import css from '../assets/css.svg'
import react from '../assets/react.svg'
import redux from '../assets/redux.svg'
import Skill from './Skill'
import next from '../assets/next_js.svg'
import vue from '../assets/vue.svg'
import express from '../assets/express.svg'
import tailwind from '../assets/tailwind.svg'
import bootstrap from '../assets/bootstrap.svg'
import git from '../assets/git.svg'
import github from '../assets/github.svg'
import vs from '../assets/vs.svg'
import json from '../assets/json.svg'
import resfullApi from '../assets/restAPI.png'
import oop from '../assets/oop.png'
import dataStructure from '../assets/dataStructure.png'
import figma from '../assets/figma.svg'
import mysql from '../assets/mysql.svg'
export default function MySkills(){
    return(
        <section id='skills' className='container m-5 col pt-5' style={{maxWidth:'1200px'}}>
            <div className='row  gap-5 pb-5 '>
            <h1 style={{fontFamily:'"Roboto" , sans-serif'}}>My Skills</h1>
            </div>
         <div className='row gap-5 mb-5 pb-5 '>  
          <Skill image={cpp} text='C++'/>
          <Skill image={python} text='Python'/>
          <Skill image={javascript} text="JavaScript(ES6+)"/>
          <Skill image={html5} text="HTML5"/>
          <Skill image={css} text="CSS" />
          <Skill image={react} text="React.js" />
          <Skill image={redux} text="Redux"/>
         </div>
         <div className='row gap-5 mb-5 pb-5'>
            <Skill image={next} text="Next.js"/>
            <Skill image={vue} text="Vue.js" />
            <Skill image={express} text="Express.js" />
            <Skill image={tailwind} text="Tailwind" />
            <Skill image={bootstrap} text="Bootstrap" />
            <Skill image={git} text="Git" />
            <Skill image={github} text="GitHub" />
         </div>
         <div className='row gap-5'>
            <Skill image={vs} text="vs code"/>
            <Skill image={json} text="JSON" />
            <Skill image={resfullApi} text="RESTful APIs" />
            <Skill image={oop} text="OOP" />
            <Skill image={dataStructure} text="Data Structures" />
            <Skill image={figma} text="Figma" />
            <Skill image={mysql} text="MySQL" />
         </div>
        </section>
    )
}
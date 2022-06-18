import React, { Component } from 'react';


class Resume extends Component {
  render() {
    if(this.props.data){
     var education = this.props.data.education.map(function(edu){
       return <div key={edu.school} className="row item">
          <div className="twelve columns">
             <h3>{edu.school}</h3>
             <p className="info">{edu.degree} <span>&bull;</span> <em className="date">{edu.graduated}</em></p>
             <p>
               {edu.description}
             </p>
          </div>
       </div>
     });

     var work = this.props.data.work.map(function(job){
       return <div key={job.company} className="row item">
          <div className="twelve columns">
             <h3>{job.company}</h3>
             <p className="info">{job.title}<span>&bull;</span> <em className="date">{job.years}</em></p>

             <p>
             {job.description}
             </p>
          </div>
       </div>
     });

     var skills = this.props.data.skills.map(function(skill){
       var className = 'bar-expand '+skill.name.toLowerCase();
       return <li key={skill.name}><span style={{width:skill.level}} className={className}></span><em>{skill.name}</em></li>
     });
   }
    return (
      <section id="resume">

   <div className="row education">
      <div className="three columns header-col">
         <h1><span>Educación</span></h1><br />
      </div>
        {education}
   </div>
   <div className="row work">
      <div className="three columns header-col">
         <h1><span>Trabajo</span></h1><br />
      </div>
            {work}
   </div>
   <div className="row skill">
      <div className="three columns header-col">
         <h1><span>Habilidades (Skills)</span></h1>
      </div>
      <div className="nine columns main-col">

         <p>Ingeniero de formación, curioso y entusiasta del aprendizaje. Por mi cuenta me he formado en varias áreas del conocimiento, entre los que destacan desarrollo de soluciones web, software para mejoras de procesos y gestión de flujos de trabajo. He emprendido varios proyectos freelance y en las empresas que he trabajado siempre he aportado valor a los procesos.
         </p>

     <div className="bars">

        <ul className="skills">
          {skills}
       </ul>

     </div>

   </div>

   </div>

</section>
    );
  }
}

export default Resume;

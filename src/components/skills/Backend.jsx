import React from 'react'

const Backend = () => {
  return (
    <div className="skills__content">
    <h3 className="skills__title">Backend Developer</h3>
      <div className="skills__box">
        <div className="skills__group">
          <div className="skills__data">
            <i class="bx bxs-badge-check"></i>
            <div>
              <h3 className="skills__name">nODE  JS</h3>
              <span className="skills__level">Intermidiate</span>
            </div>
          </div>

          <div className="skills__data">
          <i class="bx bxs-badge-check"></i>
          <div>
            <h3 className="skills__name">MySQL</h3>
            <span className="skills__level">Advance</span>
          </div>
        </div>

        <div className="skills__data">
        <i class="bx bxs-badge-check"></i>
        <div>
          <h3 className="skills__name">MongoDB</h3>
          <span className="skills__level">Intermidiate</span>
        </div>
      </div>

      <div className="skills__data">
      <i class="bx bxs-badge-check"></i>
      <div>
        <h3 className="skills__name">Firebase</h3>
        <span className="skills__level">basic</span>
      </div>
    </div>

    
        </div>{" "}
      </div>
  
  </div>
  )
}

export default Backend
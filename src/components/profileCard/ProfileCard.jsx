import './profileCard.css'

/* eslint-disable react/prop-types */
function ProfileCard({character}) {

    return (        
        
        <div className="profileCardContainer">
            <div className='profileCardBackground'>
                <div className="profileCard">
                    <img src={character.image} height={300} alt={character.name} />
                    <h2>{character.name}</h2>
                    <h3>Profession: </h3>
                    <p>{character.profession}</p> 
                    <h3>Hobby: </h3> 
                    <p>{character.hobby}</p>                 
                </div>
            </div>
        </div>
        
    )
}
/* eslint-enable react/prop-types */

export default ProfileCard;
function ProjectView({order})
{
    return(order % 2 === 0 ?
        <>
            <div className="project-view__description">
                <b>Swaver</b>
                <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy.</p>
             </div>
            <div className="project-view__line">
                <div className="project-view__line project-view__dot"/>
            </div>
            <div className="project-view__image">
                <img
                src="https://images.pexels.com/photos/4526432/pexels-photo-4526432.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"/>
                <h1>SendWave</h1>
            </div>
        </>
        :
        <>
            <div className="project-view__image">
                <img 
                    src="https://images.pexels.com/photos/1188751/pexels-photo-1188751.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"/>
                <h1>Swaver</h1>
            </div>
            <div className="project-view__line">
                <div className="project-view__line project-view__dot"/>
            </div>
            <div className="project-view__description">
                <b>SendWave</b>
                <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet.</p>
            </div>

        </>
    )
}

export default ProjectView;

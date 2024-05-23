const user = {
    name: 'Batman',
    imageUrl: 'https://img.etimg.com/thumb/msid-106905809,width-300,height-225,imgsize-40242,resizemode-75/the-batman-2-heres-what-we-know-so-far-about-release-date-cast-plot-and-more.jpg',
    imageSize: 400,
};
function Card(){
    return (
        <>
            <h1> {user.name}</h1>
            <img
                className="Protrait"
                src={user.imageUrl}
                alt ={'Photo of ' + user.name}
                style={{
                    width: user.imageSize,
                    height: user.imageSize,
                
                }}
            />
        </>
    )
}

export default Card;
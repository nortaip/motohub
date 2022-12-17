import '../components/Main.css';
function usercard() {
    return (
        <>
            <div className='user-main'>
                <div className="user-info">
                    <h4 className='whh'>Мамед Мамедов</h4>
                    <h5 className='whh'>Просто хороший парень</h5>
                    <p className='user-badge'>проверенный</p>
                </div>
                <img alt='pp' className='pp' src='/assets/images/profimg.jpg' />
            </div>
        </>
    );
}
export default usercard;
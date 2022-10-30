import React from 'react';
import { data } from './mockData';
import { MdChevronLeft, MdChevronRight } from 'react-icons/md';
import '../style/Card.css'
import { Divider } from 'semantic-ui-react'
import Card from 'react-bootstrap/Card';
import StarIcon from '@mui/icons-material/Star';
import CurrencyRupeeIcon from '@mui/icons-material/CurrencyRupee';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';

function card() {

    const slideLeft = () => {
        var slider = document.getElementById('slider');
        slider.scrollLeft = slider.scrollLeft - 500;
    };

    const slideRight = () => {
        var slider = document.getElementById('slider');
        slider.scrollLeft = slider.scrollLeft + 500;
    };


    return (
        <div className="fullsection">
            <div className="secondsection">
                <div className="secondheading">
                    <p>New this week</p>
                    <div className="cursorslider">
                        <MdChevronLeft className='leftcursor' onClick={slideLeft} size={30} />
                        <MdChevronRight className='rightcursor' onClick={slideRight} size={30} />
                    </div>
                </div>
                <div className="cardscreenimage">
                    <div
                        id='slider'
                        className='slider'
                    >
                        {data.map((item) => (
                            <img
                                className='cardimage'
                                src={item.img}
                                alt='/'
                            />
                        ))}
                    </div>

                </div>
            </div>
            <div className="secondbutttonsection">
                <button className="fristbuttons">Dates</button>
                <button className="fristbuttons">Group size</button>
                <button className="fristbuttons">More filters</button>
                <Divider vertical></Divider>
                <button className="secondsubbuttons">Great for groups</button>
                <button className="secondsubbuttons">Family-friendly</button>
                <button className="secondbuttons">Animals</button>
                <button className="secondsubbuttons">Arts & writing</button>
                <button className="secondbuttons">Baking</button>
                <button className="secondbuttons">Cooking</button>
                <button className="secondbuttons">Dance</button>
                <button className="secondbuttons">Drinks</button>
                <button className="secondbuttons">Entertainemnt</button>
                <MdChevronRight className='rightcursor' onClick={slideRight} size={30} />
            </div>

            <div className="thirdsection">
                <div className="thirdheading">
                    <p>Plan a trip with help from local Hosts around the world</p>
                    <div className="cursorslider">
                        <p>Show (9)</p>
                        <MdChevronLeft className='leftcursor' onClick={slideLeft} size={30} />
                        <MdChevronRight className='rightcursor' onClick={slideRight} size={30} />
                    </div>
                </div>
                <div className="cardscreenimage">
                    <div
                        id='slider'
                        className='slider'
                    >
                        <div className="forthsection">
                            <Card style={{ width: '18rem' }} >
                                <Card.Img className="cardimagethirdsec" variant="top" src="https://images.unsplash.com/photo-1547005327-ef75a6961556?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8b2NlYW58ZW58MHwyfDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60" />
                                <Card.ImgOverlay className="cardoverlay">
                                    <FavoriteBorderIcon />
                                </Card.ImgOverlay>
                                <Card.Body>
                                    <Card.Title className="cardtitle"><StarIcon className="StarIcon" />4.99(153).United State</Card.Title>
                                    <Card.Text className="cardtext">
                                        Plan The Perfect New<br></br> York Vacation<br></br><b>From <CurrencyRupeeIcon />1,566</b>/person
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                            <Card style={{ width: '18rem' }}>
                                <Card.Img className="cardimagethirdsec" variant="top" src="https://images.unsplash.com/photo-1480926965639-9b5f63a0817b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fG9jZWFufGVufDB8MnwwfHw%3D&auto=format&fit=crop&w=800&q=60" />
                                <Card.ImgOverlay className="cardoverlay">
                                    <FavoriteBorderIcon />
                                </Card.ImgOverlay>
                                <Card.Body>
                                    <Card.Title className="cardtitle"><StarIcon className="StarIcon" />5.0(19).Spain</Card.Title>
                                    <Card.Text className="cardtext">
                                        Design your trip to<br></br> Barcelona with Gemma<br></br><b>From <CurrencyRupeeIcon />3,119</b>/person
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                            <Card style={{ width: '18rem' }}>
                                <Card.Img className="cardimagethirdsec" variant="top" src="https://images.unsplash.com/photo-1566024287286-457247b70310?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fG9jZWFufGVufDB8MnwwfHw%3D&auto=format&fit=crop&w=800&q=60" />
                                <Card.ImgOverlay className="cardoverlay">
                                    <FavoriteBorderIcon />
                                </Card.ImgOverlay>
                                <Card.Body>
                                    <Card.Title className="cardtitle"><StarIcon className="StarIcon" />4.97(60).South Korea</Card.Title>
                                    <Card.Text className="cardtext">
                                        Craft a custom trip top<br></br> to Korea with Jay<br></br><b>From <CurrencyRupeeIcon />3,475</b>/person
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                            <Card style={{ width: '18rem' }}>
                                <Card.Img className="cardimagethirdsec" variant="top" src="https://images.unsplash.com/photo-1494791368093-85217fbbf8de?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8b2NlYW58ZW58MHwyfDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60" />
                                <Card.ImgOverlay className="cardoverlay">
                                    <FavoriteBorderIcon />
                                </Card.ImgOverlay>
                                <Card.Body>
                                    <Card.Title className="cardtitle"><StarIcon className="StarIcon" />4.63(8).Mexico</Card.Title>
                                    <Card.Text className="cardtext">
                                        Live Tulum like a local<br></br><br></br><b>From <CurrencyRupeeIcon />624</b>/person
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                            <Card style={{ width: '18rem' }}>
                                <Card.Img className="cardimagethirdsec" variant="top" src="https://images.unsplash.com/photo-1551405780-03882d5a2ba7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTN8fG9jZWFufGVufDB8MnwwfHw%3D&auto=format&fit=crop&w=800&q=60" />
                                <Card.ImgOverlay className="cardoverlay">
                                    <FavoriteBorderIcon />
                                </Card.ImgOverlay>
                                <Card.Body>
                                    <Card.Title className="cardtitle"><StarIcon className="StarIcon" />4.75(12).United States</Card.Title>
                                    <Card.Text className="cardtext">
                                        Plan a trip to amazing <br></br>Austin<br></br><b>From <CurrencyRupeeIcon />2,060</b>/person
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                            <Card style={{ width: '18rem' }}>
                                <Card.Img className="cardimagethirdsec" variant="top" src="https://images.unsplash.com/photo-1562059392-096320bccc7e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTJ8fG9jZWFufGVufDB8MnwwfHw%3D&auto=format&fit=crop&w=800&q=60" />
                                <Card.ImgOverlay className="cardoverlay">
                                    <FavoriteBorderIcon />
                                </Card.ImgOverlay>
                                <Card.Body>
                                    <Card.Title className="cardtitle"><StarIcon className="StarIcon" />4.90(42).Italy</Card.Title>
                                    <Card.Text className="cardtext">
                                        Create your Rome itinerary<br></br> with Debora<br></br><b>From <CurrencyRupeeIcon />985</b>/person
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default card
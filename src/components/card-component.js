import NumbersComponent from "./number-component";

export default function CardComponent(){
    return (
        <div className="card">
            <div className="card-bg"></div>
            <img src="/images/image-victor.jpg" alt="" />
            <h2>Victor Crest <span>26</span></h2>
            <p>London</p>
            <NumbersComponent />
        </div>
    )
}
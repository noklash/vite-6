import React from "react";
import Logo from "../src/Assets/Camp Images/logo"


export default function Landing(){
    return (
        <div>
            {/* <nav>
            <svg width="118" height="27" viewBox="0 0 118 27" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M5.625 0C6.235 7.189 0 9.664 0 15.996C0 20.297 3.069 23.968 9 24C14.931 24.032 18 19.586 18 15.044C18 10.903 15.938 6.998 12.048 4.57C12.972 7.177 11.742 9.558 10.547 10.378C10.617 7.041 9.422 2.089 5.625 0ZM10.336 13C14.091 16.989 11.785 22 8.769 22C6.934 22 5.99 20.735 6 19.423C6.019 16.99 8.737 16.988 10.336 13Z" fill="#F03434"/>
            <path d="M34.716 15.014L30 7.652H32.97L36.048 12.692H36.138L39.18 7.652H42.006L37.326 15.014V20H34.716V15.014ZM46.2055 20.216C44.6815 20.216 43.5415 19.814 42.7855 19.01C42.0415 18.206 41.6695 16.958 41.6695 15.266C41.6695 13.574 42.0415 12.326 42.7855 11.522C43.5415 10.718 44.6815 10.316 46.2055 10.316C47.6095 10.316 48.6595 10.724 49.3555 11.54C50.0515 12.344 50.3995 13.586 50.3995 15.266V15.842H44.1715C44.1955 16.682 44.3635 17.306 44.6755 17.714C44.9875 18.11 45.5095 18.308 46.2415 18.308C46.7575 18.308 47.1715 18.164 47.4835 17.876C47.8075 17.588 47.9695 17.18 47.9695 16.652H50.3995C50.3995 17.84 50.0155 18.734 49.2475 19.334C48.4795 19.922 47.4655 20.216 46.2055 20.216ZM47.8435 14.204C47.8435 12.896 47.2975 12.242 46.2055 12.242C45.5815 12.242 45.1075 12.404 44.7835 12.728C44.4715 13.052 44.2795 13.544 44.2075 14.204H47.8435ZM52.3014 6.986H54.7674V20H52.3014V6.986ZM57.3112 10.532H59.4172L59.5792 11.774H59.7052C60.0052 11.294 60.4072 10.934 60.9112 10.694C61.4152 10.442 61.9732 10.316 62.5852 10.316C63.7852 10.316 64.7152 10.73 65.3752 11.558C66.0352 12.374 66.3652 13.616 66.3652 15.284C66.3652 16.916 66.0292 18.146 65.3572 18.974C64.6972 19.802 63.8152 20.216 62.7112 20.216C62.0752 20.216 61.5112 20.102 61.0192 19.874C60.5392 19.646 60.1612 19.322 59.8852 18.902H59.7772V23.114H57.3112V10.532ZM61.7932 18.074C62.5252 18.074 63.0472 17.858 63.3592 17.426C63.6712 16.982 63.8272 16.316 63.8272 15.428V15.104C63.8272 14.216 63.6712 13.556 63.3592 13.124C63.0472 12.68 62.5252 12.458 61.7932 12.458C60.4492 12.458 59.7772 13.34 59.7772 15.104V15.392C59.7772 17.18 60.4492 18.074 61.7932 18.074ZM73.7691 20.216C69.7851 20.216 67.7931 18.086 67.7931 13.826C67.7931 11.69 68.3151 10.094 69.3591 9.038C70.4031 7.97 71.8731 7.436 73.7691 7.436C74.8131 7.436 75.7491 7.616 76.5771 7.976C77.4171 8.324 78.0771 8.864 78.5571 9.596C79.0491 10.316 79.2951 11.198 79.2951 12.242H76.6131C76.6131 11.438 76.3551 10.808 75.8391 10.352C75.3231 9.884 74.6511 9.65 73.8231 9.65C72.6951 9.65 71.8551 9.986 71.3031 10.658C70.7511 11.33 70.4751 12.296 70.4751 13.556V14.096C70.4751 16.7 71.5911 18.002 73.8231 18.002C74.6991 18.002 75.3951 17.774 75.9111 17.318C76.4391 16.862 76.7031 16.232 76.7031 15.428H79.2951C79.2951 16.484 79.0551 17.372 78.5751 18.092C78.0951 18.8 77.4411 19.334 76.6131 19.694C75.7851 20.042 74.8371 20.216 73.7691 20.216ZM83.4833 20.216C82.7513 20.216 82.0793 20.024 81.4673 19.64C80.8553 19.256 80.5493 18.56 80.5493 17.552C80.5493 16.34 81.0473 15.482 82.0433 14.978C83.0393 14.462 84.4493 14.204 86.2733 14.204V13.538C86.2733 13.118 86.1773 12.794 85.9853 12.566C85.8053 12.338 85.4573 12.224 84.9413 12.224C84.3893 12.224 83.9933 12.308 83.7533 12.476C83.5253 12.644 83.4113 12.842 83.4113 13.07V13.34H81.0353C81.0233 13.268 81.0173 13.136 81.0173 12.944C81.0173 12.152 81.3653 11.516 82.0613 11.036C82.7693 10.556 83.7053 10.316 84.8693 10.316C86.1653 10.316 87.1313 10.58 87.7673 11.108C88.4153 11.636 88.7393 12.398 88.7393 13.394V17.57C88.7393 17.786 88.7993 17.948 88.9193 18.056C89.0393 18.152 89.1893 18.2 89.3693 18.2H89.8733V19.928C89.4893 20.12 89.0153 20.216 88.4513 20.216C87.9593 20.216 87.5453 20.108 87.2093 19.892C86.8853 19.676 86.6633 19.37 86.5433 18.974H86.4353C86.0873 19.382 85.6853 19.694 85.2293 19.91C84.7853 20.114 84.2033 20.216 83.4833 20.216ZM84.2573 18.272C84.9533 18.272 85.4633 18.08 85.7873 17.696C86.1113 17.3 86.2733 16.778 86.2733 16.13V15.842C84.1253 15.842 83.0513 16.322 83.0513 17.282C83.0513 17.582 83.1473 17.822 83.3393 18.002C83.5433 18.182 83.8493 18.272 84.2573 18.272ZM91.3073 10.532H93.4133L93.5933 11.774H93.7193C94.4153 10.802 95.3153 10.316 96.4193 10.316C97.6193 10.316 98.4473 10.802 98.9033 11.774H99.0473C99.7673 10.802 100.703 10.316 101.855 10.316C102.755 10.316 103.469 10.58 103.997 11.108C104.537 11.636 104.807 12.482 104.807 13.646V20H102.341V14.168C102.341 13.052 101.879 12.494 100.955 12.494C100.475 12.494 100.079 12.692 99.7673 13.088C99.4553 13.472 99.2993 13.952 99.2993 14.528V20H96.8333V14.168C96.8333 13.052 96.3713 12.494 95.4473 12.494C94.9673 12.494 94.5653 12.692 94.2413 13.088C93.9293 13.472 93.7733 13.952 93.7733 14.528V20H91.3073V10.532ZM107.303 10.532H109.409L109.571 11.774H109.697C109.997 11.294 110.399 10.934 110.903 10.694C111.407 10.442 111.965 10.316 112.577 10.316C113.777 10.316 114.707 10.73 115.367 11.558C116.027 12.374 116.357 13.616 116.357 15.284C116.357 16.916 116.021 18.146 115.349 18.974C114.689 19.802 113.807 20.216 112.703 20.216C112.067 20.216 111.503 20.102 111.011 19.874C110.531 19.646 110.153 19.322 109.877 18.902H109.769V23.114H107.303V10.532ZM111.785 18.074C112.517 18.074 113.039 17.858 113.351 17.426C113.663 16.982 113.819 16.316 113.819 15.428V15.104C113.819 14.216 113.663 13.556 113.351 13.124C113.039 12.68 112.517 12.458 111.785 12.458C110.441 12.458 109.769 13.34 109.769 15.104V15.392C109.769 17.18 110.441 18.074 111.785 18.074Z" fill="black"/>
            </svg>
            </nav> */}
            <div className="image-div">
             <img/>
            </div>
            
            <div>
                <h3></h3>
                <p></p>
                <ul>
                    <li></li>
                    <li></li>
                    <li></li>
                </ul>
                <button></button>
            </div>
            
        </div>
    )
}
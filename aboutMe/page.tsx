import { title } from "@/components/primitives";
import { Button } from "@heroui/button";

export default function AboutMePage() {
  return (
    <div>
      <h1 className={title()}>About Me</h1>
      <div className="flex flex-wrap border-dotted border-4 border-gray-600 p-4 justify-center gap-4">
        <p className="border-solid border-1 border-gray-600"> <img src="https://freedomfitnessequipment.com/cdn/shop/articles/What-Are-Free-Weights_-and-How-Do-I-Use-Them--1687196170312_d75f2c81-247a-47a0-81bc-ee5a5cd53d6b.jpg?v=1687307978" alt="Picture of weights" /></p>
      </div>
      <a className="bg-lime-500" href="https://freedomfitnessequipment.com/cdn/shop/articles/What-Are-Free-Weights_-and-How-Do-I-Use-Them--1687196170312_d75f2c81-247a-47a0-81bc-ee5a5cd53d6b.jpg?v=1687307978" target="_blank">Weights</a>
      <br />
      <p> I do a lot of weightlifting at home with my home gym. I do this almost everyday.</p>
      <br />
      <a className="bg-lime-500 border-1 border-gray-600"></a> <img src=""
    </div>
  );
}

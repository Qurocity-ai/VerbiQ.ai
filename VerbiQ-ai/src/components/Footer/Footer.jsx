import React from "react";

function Footer() {
  return (
    <footer className="bg-white py-11 sm:h-[166px] w-full shadow-[0_-4px_6px_-1px_rgba(0,0,0,0.1)]">
      <div className="flex justify-evenly  items-center sm:flex-row flex-col w-full sm:pr-40 sm:pl-16 pb-4">
        <img
          src="\src\assets\Group 514676.png"
          alt="VerbiQ.ai"
          className="w-40 h-10"
        />

        <div className="flex flex-wrap items-center justify-center sm:grid sm:grid-cols-4 gap-6 sm:pl-[50px] py-5">
          <div className="sm:flex sm:flex-col sm:w-36 sm:h-[73px]">
            <a href="" className="sm:pb-4 pr-2.5 text-[#00046C]">
              Careers
            </a>
            <a href="" className="text-[#00046C]">
              Blogs
            </a>
          </div>
          <div className="sm:flex sm:flex-col sm:w-36 sm:h-[70px] sm:pl-[20px] ">
            <a href="" className="sm:pb-4 pr-4 text-[#00046C]">
              Jobs
            </a>
            <a href="" className="text-[#00046C]">
              News Letters
            </a>
          </div>
          <div className=" sm:flex  sm:flex-col sm:col-span-1 hidden sm:w-[134px] sm:h-[73px] sm:pl-16">
            <a href="" className="sm:flex sm:pb-4 items-center">
              <img
                src="https://s3-alpha-sig.figma.com/img/8cfd/8e96/8a95cc79f5ec7650c5db501708199004?Expires=1744588800&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=ERM7D8lztzC8qX191xuLKSoy~HsZAhFuY-brDmj9rCpLBIupURzCUmX33zJYKCVrPzHqJWk2NaN-KLP1C3YEjU3d6jRmLnbGHShCB2jW1kamz1eFDXz7OG~U2zN3MxDTHDVhe0HIR6mKJNA98wp3xsfbqdAcIrvDr1swmmzs7A9mjDc0mThnB5AfW3CX328ILCJIYXTOEu6wAeEpovL0RYsjg6QxKvRnM~2azM92klWWUYXfWgJxdczict4vIgBpHh02fjCqJ-WqDz5dNf3e-Q6l0K3ii2LYRET5FhKa265VKNVoQItOt2NsZ7adht8iZ21hXl7mRlx7d5~fS0KH7Q__"
                alt="LinkedIn-logo"
                className="w-7 h-7 mr-2"
              />
              <span className="text-[#00046C]"> LinkedIn</span>
            </a>
            <a href="" className="sm:flex items-center">
              <img
                src="https://s3-alpha-sig.figma.com/img/7a34/eb65/d9ab08fe93f5f7eba1f5a458e8f0e8c8?Expires=1744588800&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=WcN~EMbJhk8L9YyheJv0yXaWnleSPRu7F0ppD3mVBETexNNyTsedb54UtdKf09S-wkr-WaSrhpJDl3PvAeQoNZjooheobW~1l61eDg~j18bGWrh4JetQxiOrzIxa7UTtXYZZoj0QlXhrtmVpc7B~u80jYfgZcT7hgaqZsEAYKXLlL12b0-yFECE4pBSvONN3zApC8v1cZrttmEYnfme9DUBI7BPjmvW60F6gVaLVceXKHp-BGUT~vJ-caCA7Gf9ZU5yOeB3rSykAgY8Z-9YRNNoZW8VH7ik4vgg9p8KjsjsKzgwJBXfbj5YWRQlWSmJeRL0wZ75HFAbd6Tex34LNog__"
                alt="Instagram-logo"
                className="w-7 h-7 mr-2"
              />
              <span className="text-[#00046C]">Instagram</span>
            </a>
          </div>
          <div className="sm:flex sm:flex-col sm:w-[112px] sm:h-[73px] sm:pl-[124px] ">
            <a href="" className="sm:pb-4 pr-4 text-[#00046C]">
              9373902340
            </a>
            <a href="" className="text-[#00046C]">
              hr@verbiq.ai
            </a>
          </div>
        </div>
        {/* <div className=" sm:flex flex-col sm:col-span-1"></div> */}
      </div>
    </footer>
  );
}

export default Footer;

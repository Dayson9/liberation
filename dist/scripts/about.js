const { Template } = QueFlow;

const aboutContent = new Template("#abt", (data) => {
  let p = "",
    split = data.summary.split("."),
    list = "";

  for (let i in split) {
    p += `<p>${split[i]}.</p>`;
  }

  if (data.list) {
    split = data.list.split(".");

    for (let i in split) {
      list += `<li>${split[i]}.</li>`;
    }

    p = p.slice(0, p.lastIndexOf("."));
    list = "<ul>" + list + "</ul>";
  }

  return `
     <div class='about'>
       <img src="./images/{{src}}" alt="CCC Liberation Parish">
       <h2>{{title}}</h2>
       ${p}${list}
     </div>
     <br><br><br>
     <br><br><br>`;
});

aboutContent.renderWith({
  src: "worship.jpg",
  title: "Our Worship",
  summary: "The shared worship experience is essential to the Christian life. It draws us closer to Jesus, informs our understanding of Him, inspires us to serve Him, and empowers us to accomplish His purposes in our communities.  We strive to be on the cutting edge of the modern worship scene in Liberation Parish. Our services innovative, highly energetic, experiential, adaptive and relevant. Plan a visit to experience an amazing time of connection with God"
});

aboutContent.renderWith({
  src: "worship.jpg",
  title: "Our Discipleship",
  summary: "We seek to foster a deeper connection between ourselves and God. We are committed to meeting weekly with other followers in Bible study groups to take a deeper dive into what it means to be a disciple of Jesus. We examine scripture and have meaningful discussions centering around encountering the fullness of God, walking faithfully with Jesus and sharing both victories and hardships in the journey together"
});

aboutContent.renderWith({
  src: "worship.jpg",
  title: "Our Beliefs",
  summary: "We recognize that the foundation of belonging to God's family is accepting the leadership of Jesus in our life. So we identify the following brief statements as the essentials of the Christian experience:",
  list: "We believe in one God - the Father, Son, and Holy Spirit.We believe that the Old and New Testament Scriptures, given by plenary inspiration, contain all truth necessary to faith and Christian living.We believe that people are born with a fallen nature, and are, therefore, inclined to evil, and that continually.We believe that the finally impenitent are hopelessly and eternally lost.We believe that the atonement through Jesus Christ is for the whole human race; and that whoever repents and believes on the Lord Jesus Christ is justified and regenerated and saved from the dominion of sin.We believe that believers are to be sanctified wholly, subsequent to regeneration, through faith in the Lord Jesus Christ.We believe that the Holy Spirit bears witness to the new birth, and also to the entire sanctification of believers. We believe that our Lord will return, the dead will be raised, and the final judgment will take place"
})
+++
# Slider widget.
widget = "slider"  # See https://sourcethemes.com/academic/docs/page-builder/
headless = false  # This file represents a page section.
active = true  # Activate this widget? true/false
weight = 21  # Order that this section will appear.
align = "right"

# Slide interval.
# Use `false` to disable animation or enter a time in ms, e.g. `5000` (5s).
interval = 5000

# Slide height (optional).
# E.g. `500px` for 500 pixels or `calc(100vh - 70px)` for full screen.
height = ""


[content]
  # Choose how much pages you would like to display (0 = all pages)
  count = 2
  
  # Choose how many pages you would like to offset by
  offset = 0

  # Page order. Descending (desc) or ascending (asc) date.
  order = "desc"

# Slides.
# Duplicate an `[[item]]` block to add more slides.
[[item]]
  title = "援友公益沙龙"
  url = "/zh/salon/"
  type = "salon"
  content = """ 援友公益沙龙是面向全国的公益性健康教育平台，旨在使人们自觉地采纳有益于眼健康的行为和生活方式，消除或减轻影响健康的危险因素。以此达到预防眼睛疾病，促进眼健康，提高生活质量的目标。我们结合了互联网直播、线下沙龙等多种活动类型，形式简单、方便参加、易于互动，向大众提供健康科普宣教、经验交流、就医信息分享等资讯及教育内容。
  """
  overlay_img = "pic-project-salon.PNG" 
  
[[item]]
  title = "援助计划"
  url = "/zh/cpp/"
  type = "cpp"
  content = """ 援助计划项目是援友社区推出的一系列公益救助项目的总称，是由援友社区发起的全国性角膜病民间系列公益救助工程，针对角膜病患者提供个性化针对性的全方位公益支持。我们希望通过民间资金力量援助圆锥角膜等疑难角膜病社群，撬动社会政策改善及多方援助资源介入，提升患者群体生命权、健康权的获得感，提升罕见角膜病医疗保障水平，为角膜病群体提供有针对性的专业医疗援助。
  """
  overlay_img = "pic-project-cpp.PNG"  

[[item]]
  title = "援友社会公益"
  type = "ml"
  url = "/zh/ml/"
  content = """ 援友社会公益项目致力于为社会公益力量和受助人群建立起更加紧密与广泛的连接，促进公益资源在全社会的流动，帮助公益资源得到更加高效的利用。我们收集、整理、传播来自社会各界的公益信息，全方位凝聚公益力量，精准定位援助对象。我们帮助受助人群以最简单快速的方式对接公益资源，同时汇聚需求，呼吁动员更多的社会公益投入。
  """
  overlay_img = "pic-project-ml.PNG"  
  
[[item]]
  title = "援友公益百科"
  url = "/zh/wiki/"
  type = "wiki"
  content = """ 援友公益百科是医疗知识的 GitHub + Wikipedia。我们倡导开放式、小型化、无地理限制的开源共享协作，强调健康教育资源的公益与公共属性，向全社会提供开放、免费、高质量的眼科患者教育知识及资讯服务。我们的宗旨是倡导人人享有平等的健康权利，构建公益性的全民健康信息知识库。
  """
  overlay_img = "pic-project-wiki.PNG"  
+++

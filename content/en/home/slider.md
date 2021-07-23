+++
# Slider widget.
widget = "slider"  # See https://sourcethemes.com/academic/docs/page-builder/
headless = false  # This file represents a page section.
active = true  # Activate this widget? true/false
weight = 11  # Order that this section will appear.
align = "right"

# Slide interval.
# Use `false` to disable animation or enter a time in ms, e.g. `5000` (5s).
interval = 5000

# Slide height (optional).
# E.g. `500px` for 500 pixels or `calc(100vh - 70px)` for full screen.
height = ""

[content]
  count = 2
  offset = 0
  order = "desc"

# Slides.
# Duplicate an `[[item]]` block to add more slides.
[[item]]
  title = "Introduction to Programming in C"
  url = "/c/"
  type = "c"
  content = """
  We organize activities (mostly online) where ta ophthalmologist doctors (often from some of the best hospitals in China) provide free courses & seminars or diagnosis to patients in a QQ chatroom, or one or several patients with rare eye diseases share their experiences with their rare eye diseases, how they got diagnosed and treated, and how their life becomes afterwards. 
  """
  overlay_img = "pic-project-c.PNG"  
  
[[item]]
  title = "Algorithms and Programming in C++"
  url = "/cpp/"
  type = "cpp"
  content = """
  We provide material cpp to people with financial difficulties by collaboration with commercial companies. For example, for many poor Chinese, even a pair of RGP glasses is beyond their financial capabilities. We have hence launched a program with LucidKorea to provide a pair of RGP glasses for free for KC patients who live in poverty. Other collaborations to help poor patients are also envisioned.
  """
  overlay_img = "pic-project-cpp.PNG"  

[[item]]
  title = "Machine Learning in R & Python"
  type = "ml"
  url = "/ml/"
  js_id = "particles-js-slider"
  content = """
  The Yuanyou Connect Project is committed to building closer and wider connection between the social public welfare forces and the affected groups, promoting the flow of public welfare resources throughout the society, and helping to make more efficient use of public welfare resources. We help the recipients connect public welfare resources in the simplest and fastest way, while pooling demand and calling for the mobilization of more social public welfare inputs.  
  """
  overlay_img = "pic-project-ml.PNG"  
  
[[item]]
  title = "Reinforcement Learning in Python"
  url = "/rl/"
  type = "rl"
  content = """
  We have written many original articles to promote the sensibilization and awareness of rare eye diseases among people with vision problems as well as among doctors. Moreover, we try to keep up with the research community and pharmaceutical companies by presenting latest advancements in treatments for rare eye diseases. 
  """
  overlay_img = "pic-project-rl.PNG"  
+++

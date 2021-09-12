import { useState, useRef, useEffect } from 'react';
import { Checkbox, Timeline, Carousel, Modal } from 'antd';
import { HeartTwoTone, CheckCircleTwoTone } from '@ant-design/icons';
import style from './index.less';

const CheckboxGroup = Checkbox.Group;

const options = [
  { label: 'LMH', value: 'LMH' },
  { label: 'YJ', value: 'YJ' },
];

const timeItems = [
  {
    human: 'YJ',
    props: { color: 'pink' },
    val: '下班去合肥火车站',
    time: '9-18 18:00',
  },
  {
    human: 'YJ',
    props: { color: 'pink' },
    val: '从合肥火车站坐车到南京南站',
    time: '9-18 18:49',
    imgs: [require('@/assets/ticket1.jpg')],
  },
  {
    human: 'LMH',
    props: { color: 'green' },
    val: '从公司出发去南京南站',
    time: '9-18 19:00',
  },
  {
    human: 'LMH',
    props: { color: 'green' },
    val: '到达南京南站等女朋友',
    time: '9-18 19:20',
  },
  {
    human: 'YJ',
    props: { color: 'pink' },
    val: '到达南京南站',
    time: '9-18 19:40',
  },
  {
    human: 'LMH&YJ',
    props: { dot: <HeartTwoTone twoToneColor="#eb2f96" /> },
    val: '一起出发去湖州',
    time: '9-18 20:16',
    imgs: [require('@/assets/ticket2.jpg')],
  },
  {
    human: 'LMH&YJ',
    props: { dot: <HeartTwoTone twoToneColor="#eb2f96" /> },
    val: '到达湖州，出发去酒店',
    time: '9-18 21:14',
  },
  {
    human: 'LMH&YJ',
    props: { dot: <HeartTwoTone twoToneColor="#eb2f96" /> },
    val: '到底酒店，搞点吃的，洗洗睡觉',
    time: '9-18 21:30',
    imgs: [require('@/assets/hotel1.jpg')],
  },
  {
    human: 'LMH&YJ',
    props: { dot: <HeartTwoTone twoToneColor="#eb2f96" /> },
    val: '起床，洗漱，收拾，出发去状元街，吃早饭，老梁干挑',
    time: '9-19 8:00',
    imgs: [require('@/assets/eat1.jpeg')],
  },
  {
    human: 'LMH&YJ',
    props: { dot: <HeartTwoTone twoToneColor="#eb2f96" /> },
    val: '逛吃逛吃逛吃，状元街-小西街-衣裳街-飞英公园，丁连芳-周生记-古茗',
    time: '9-19 10:30',
    imgs: [
      require('@/assets/eat2.jpeg'),
      require('@/assets/eat3.jpeg'),
      require('@/assets/eat4.jpeg'),
    ],
  },
  {
    human: 'LMH&YJ',
    props: { dot: <HeartTwoTone twoToneColor="#eb2f96" /> },
    val: '去酒店，把东西啥的放下来收拾收拾',
    time: '9-19 14:00',
    imgs: [require('@/assets/hotel2.jpg')],
  },
  {
    human: 'LMH&YJ',
    props: { dot: <HeartTwoTone twoToneColor="#eb2f96" /> },
    val: '继续逛吃逛吃',
    time: '9-19 15:00',
  },
  {
    human: 'LMH&YJ',
    props: { dot: <HeartTwoTone twoToneColor="#eb2f96" /> },
    val: '状元楼吃完饭',
    time: '9-19 19:00',
    imgs: [require('@/assets/eat5.jpeg')],
  },
  {
    human: 'LMH&YJ',
    props: { dot: <HeartTwoTone twoToneColor="#eb2f96" /> },
    val: '回酒店，收拾收拾，洗澡睡觉',
    time: '9-19 20:30',
  },
  {
    human: 'LMH&YJ',
    props: { dot: <HeartTwoTone twoToneColor="#eb2f96" /> },
    val: '起床吃自助早餐',
    time: '9-20 8:00',
  },
  {
    human: 'LMH&YJ',
    props: { dot: <HeartTwoTone twoToneColor="#eb2f96" /> },
    val: '去南浔古镇，隶溪二毛汤包-卢记烧饼-金泰老法菜-徐忠良糕点店-闺蜜家鲜肉月饼',
    time: '9-20 9:00',
  },
  {
    human: 'LMH&YJ',
    props: { dot: <HeartTwoTone twoToneColor="#eb2f96" /> },
    val: '返回市内，往天湖方向跑，月亮广场，看夜景',
    time: '9-20 15:00',
  },
  {
    human: 'LMH&YJ',
    props: { dot: <HeartTwoTone twoToneColor="#eb2f96" /> },
    val: '最后一天酒店自由发挥，到时候看情况',
    time: '9-20 15:00',
  },
  {
    human: 'LMH&YJ',
    props: { dot: <HeartTwoTone twoToneColor="#eb2f96" /> },
    val: '中午找个地方吃饭',
    time: '9-21 12:00',
  },
  {
    human: 'LMH&YJ',
    props: { dot: <HeartTwoTone twoToneColor="#eb2f96" /> },
    val: '湖州站->南京南站',
    time: '9-21 14:24',
    imgs: [require('@/assets/ticket3.jpg')],
  },
  {
    human: 'YJ',
    props: { color: 'pink' },
    val: '南京南站->合肥站',
    time: '9-21 16:30',
    imgs: [require('@/assets/ticket4.jpg')],
  },
  {
    human: 'LMH',
    props: { color: 'green' },
    val: '南京南站坐地铁回家',
    time: '9-21 16:30',
  },
  {
    human: 'YJ',
    props: { color: 'pink' },
    val: '到达合肥站，回家',
    time: '9-21 17:21',
  },
  {
    human: 'LMH&YJ',
    props: { dot: <CheckCircleTwoTone twoToneColor="#52c41a" /> },
    val: '结束愉快的中秋之旅',
    time: '9-21 18:00',
  },
];

export default function IndexPage() {
  const [checkHuman, setCheckHuman] = useState<string[]>(['LMH', 'YJ']);
  const [imgModalVisible, setImgModalVisible] = useState<boolean>(false);
  const [activeImgs, setActiveImgs] = useState<string[]>([]);
  const [activeImgsIndex, setActiveImgsIndex] = useState<number>(0);
  const modalCarousel = useRef<any>(null);

  useEffect(() => {
    if (modalCarousel) {
      modalCarousel.current?.goTo(activeImgsIndex);
    }
  }, [activeImgsIndex]);

  const onChange = (e: any) => {
    setCheckHuman(e);
  };

  const showImgModal = (imgs: string[], i: number) => {
    setActiveImgs(imgs);
    setImgModalVisible(true);
    setActiveImgsIndex(i);
  };

  const showYJ = checkHuman.length == 1 && checkHuman[0] == 'YJ';
  const showLMH = checkHuman.length == 1 && checkHuman[0] == 'LMH';

  return (
    <div className={style.container}>
      <div className={style.title}>
        <div className={style.time}>2021中秋</div>
        <div className={style.city}>湖州</div>
        <div className={style.human}>LMH & YJ</div>
      </div>
      <div className={style.timeContainer}>
        <Timeline mode={checkHuman.length > 1 ? 'alternate' : 'left'}>
          {timeItems.map((v) => (
            <Timeline.Item
              style={
                (showYJ && v.human == 'LMH') || (showLMH && v.human == 'YJ')
                  ? { display: 'none' }
                  : {}
              }
              key={v.val}
              {...v.props}
            >
              <div>{v.val}</div>
              {v.imgs?.length ? (
                <Carousel autoplay>
                  {v.imgs?.map((t, i) => (
                    <img
                      key={t}
                      src={t}
                      onClick={() => showImgModal(v.imgs, i)}
                    />
                  ))}
                </Carousel>
              ) : null}
              <div>{v.time}</div>
            </Timeline.Item>
          ))}
        </Timeline>
      </div>
      <div className={style.fixCheckContainer}>
        <CheckboxGroup
          options={options}
          defaultValue={checkHuman}
          onChange={onChange}
        ></CheckboxGroup>
      </div>
      <Modal
        title=""
        centered
        footer={null}
        closable={false}
        visible={imgModalVisible}
        wrapClassName={style.imgModal}
        onCancel={() => setImgModalVisible(false)}
      >
        <Carousel ref={modalCarousel}>
          {activeImgs?.map((v) => (
            <img key={v} src={v} />
          ))}
        </Carousel>
      </Modal>
    </div>
  );
}

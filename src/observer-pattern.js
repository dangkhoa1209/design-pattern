// Subject (Chủ thể) - Podcast
class Podcast {
  constructor() {
    this.subscribers = []; // Danh sách người nghe
    this.latestEpisode = null;
  }

  // Phương thức để đăng ký người nghe
  subscribe(listener) {
    this.subscribers.push(listener);
  }

  // Phương thức để hủy đăng ký người nghe
  unsubscribe(listener) {
    this.subscribers = this.subscribers.filter(
      (subscriber) => subscriber !== listener
    );
  }

  // Phương thức để cập nhật tập mới nhất và thông báo cho người nghe
  publishNewEpisode(episode) {
    this.latestEpisode = episode;
    this.notifyListeners();
  }

  // Phương thức thông báo cho tất cả người nghe
  notifyListeners() {
    this.subscribers.forEach((listener) => {
      listener.update(`Tập mới: ${this.latestEpisode}`);
    });
  }
}

// Observer (Người nghe)
class Listener {
  constructor(name) {
    this.name = name;
  }

  // Phương thức được gọi khi có tập mới
  update(message) {
    console.log(`${this.name} đã nghe: ${message}`);
  }
}

// Sử dụng Observer Pattern
const podcast = new Podcast();

const listener1 = new Listener("Người nghe A");
const listener2 = new Listener("Người nghe B");
const listener3 = new Listener("Người nghe C");

// Đăng ký người nghe cho podcast
podcast.subscribe(listener1);
podcast.subscribe(listener2);
podcast.subscribe(listener3);

// Phát sóng tập mới nhất
podcast.publishNewEpisode("Tập 101: Bắt đầu một chủ đề mới");

// Người nghe Bình luận về tập mới
listener2.comment("Tập 101", "Tuyệt vời! Rất thích nội dung này.");

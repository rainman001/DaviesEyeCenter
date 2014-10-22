angular.module("daviesEye").service("homeService", function() {
	
	var patientQuotes = [
		{
			quote: 'This California native is an artist that loves a challenge. Over the years he has worked with watercolor, oils, wood and bronze. One of his favorite forms of art is sculpture. “I enjoy doing sculptures because I’m working with 360 degrees.” said Anson. For Andy when his cataracts began developing he was discouraged because it was affecting his ability to see the details in his work. “I’d been following Dr. Davies for years. Based on his reputation, I knew where to get my vision back.” After undergoing the Crystalens implant procedure Andy can see anything he needs to without the use of glasses. “I’m very happy with my results and my ability to see the details in my sculptures again!”',
			name: 'Andy Anson'
		},
		{
			quote: 'After cataracts became an unwelcome part of Karen’s life last year, she turned to her husband who had cataract surgery just five years prior. Because of the amazing results he had with Dr. Davies it was easy for Karen to decide what to do. She scheduled an appointment with Dr. Davies for a Crystalens procedure. “I can see to read, drive, watch television, paint and see where my golf ball lands- all without the need of glasses or contacts!”',
			name: 'Karen Korcheck'
		},
		{
			quote: 'My retinologist strongly recommended that I see Dr. Davies for my much needed cataract surgery. I was delighted to find such a wonderful place. My vision is now 20/25 and for the first time in many, many years, I no longer wear glasses',
			name: 'Mike Doran'
		},
		{
			quote: 'I got my first pair of glasses 14 years ago and I had been wearing them every day for over 10 years! I didn’t like wearing contacts because I could feel them and my eyes would dry easily. I knew it was time for Lasik and it was a breeze with Dr. Davies. My vision is now 20/20. The best part is being able to wear non-prescription sunglasses!”',
			name: 'Sara Borg'
		}
	];

	this.getPatientQuotes = function() {
		return patientQuotes;
	};
})
js_compiler = 'D:\tool\compiler.jar'

task :default => [:compile_sahi_wait]

task :compile_sahi_wait do
	sh "java -jar #{js_compiler} --js src/*.js --js_output_file target/sahi-wait.min.js"
	def replace_sah_script
		sahi_wait = nil
		js = nil
		File.open('src/sahi-wait.sah', 'r') do |file|
			sahi_wait = file.read;
		end
		File.open('target/sahi-wait.min.js', 'r') do |file|
			js = file.read;
		end
		sahi_wait.sub!(/<browser>.*<\/browser>/m, "<browser>#{js}</browser>");
		File.open('target/sahi-wait.sah', 'w+') do |file|
			file.puts(sahi_wait);
		end
	end
	replace_sah_script
end